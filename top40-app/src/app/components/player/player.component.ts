import { Component, OnInit } from '@angular/core';
import {AudioService} from '../../shared/services/audio-service/audio.service';
import {DataService} from '../../shared/services/top-40-service/data.service';
import {StreamState} from '../../shared/models/streamState';
import {IObject} from '../../shared/models/object';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  //music player
  files: Array<IObject> = [];
  state: StreamState | null = null;
  currentFile: any = {};
  currentFileTitle: string | null = null;
  currentFileCredit: string | null = null;
  currentFileAvatar: string | null = null;

  private apiUrl = environment.top40SongsApiUrl;
  top40Songs$ : Observable<IObject[]> | null = null;
  //end

  constructor(
    public audioService: AudioService,
    public dataService: DataService
  ) { 
    // get media files
    this.dataService.loadTop40Objects(this.apiUrl).subscribe(files => {
      this.files = files 
    })

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  playStream(url: string) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file: any, index: number) {
    this.currentFile = { index, file };
    this.currentFileTitle = file.title;
    this.currentFileCredit = file.credit;
    this.currentFileAvatar = file.cover_img_url_small;
    this.audioService.stop();
    this.playStream(file.itunes_track_preview_url);
  }

  

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change:any) {
    this.audioService.seekTo(change.value);
  }

  

  ngOnInit(): void {
    


  }

}
