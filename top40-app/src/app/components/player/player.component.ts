import { Component, OnInit } from '@angular/core';
import {AudioService} from '../../shared/services/audio-service/audio.service';
import {DataService} from '../../shared/services/top-40-service/data.service';
import {PlayerService} from '../../shared/services/player.service';
import {StreamState} from '../../shared/models/streamState';
import {IObject} from '../../shared/models/object';
import {environment} from '../../../environments/environment';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  //music player
  allFiles: Array<IObject> = [];
  songsFiles: Array<IObject> = [];
  albumsFiles: Array<IObject> = [];
  state: StreamState | null = null;
  currentFile: IObject | null = null;
  currentFileIndex: number | null = null;
  currentFileSource: string | null = null;
  currentFileTitle: string | null = null;
  currentFileCredit: string | null = null;
  currentFileAvatar: string | null = null;

  private apiSongsUrl = environment.top40SongsApiUrl;
  private apiAlbumsUrl = environment.top40AlbumsApiUrl;
  top40Songs$ : Observable<IObject[]> | null = null;

  constructor(
    public audioService: AudioService,
    public dataService: DataService,
    public playerService: PlayerService,
  ) {
    combineLatest([
      this.dataService.loadTop40Objects(this.apiAlbumsUrl),
      this.dataService.loadTop40Objects(this.apiSongsUrl),
    ]).subscribe(([albums, songs]) => {
      this.allFiles = albums.concat(songs);
    });

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    // get the value of the current file
    this.playerService.currentFile$.subscribe((value)=> {
        this.play(value);
    });

    
  }
  
  onCurrentFileChange(currentFileObs) {
      console.log(currentFileObs)
      this.currentFile = currentFileObs.file;
      console.log('from the player' + this.currentFile)
      // this.currentFileIndex = currentFile.index;
      if(currentFileObs.source === 'song'){
        this.currentFileSource = currentFileObs.source;
        this.currentFileIndex = currentFileObs.index + 39;
      } else {
      this.currentFileSource = currentFileObs.source;
      this.currentFileIndex = currentFileObs.index;
  }

  openFile(file: IObject, index: number) {
    console.log(this.allFiles)
    // this.currentFile = { index, file };
    console.log(this.currentFile)
    this.currentFileTitle = file.title;
    console.log(this.currentFileTitle)
    this.currentFileCredit = file.credit;
    this.currentFileAvatar = file.cover_img_url_small;

    this.audioService.stop();
    this.audioService.playStream(file.itunes_track_preview_url).subscribe();
  }

  // openFile(file: any) {
  //   this.currentFile = { file };
  //   this.currentFileTitle = file.title;
  //   this.currentFileCredit = file.credit;
  //   this.currentFileAvatar = file.cover_img_url_small;
  //   this.audioService.stop();
  //   this.playStream(file.itunes_track_preview_url);
  // }


  pause() {
    this.playerService.setFileSubject(empty);

    this.audioService.pause();
  }

  play() {
     this.playerService.setFileSubject(currentFile);
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    console.log(this.currentFile)
    const index = this.currentFileIndex! + 1;
    const file = this.allFiles[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFileIndex! - 1;
    const file = this.allFiles[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFileIndex === 0;
  }

  isLastPlaying() {
    return this.currentFileIndex === this.allFiles.length - 1;
  }

  onSliderChangeEnd(change:any) {
    this.audioService.seekTo(change.value);
  }



  ngOnInit(): void {

  }
}
