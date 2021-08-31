import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IObject} from '../../shared/models/object';
import {AudioService} from '../../shared/services/audio-service/audio.service';
import {PlayerService} from '../../shared/services/player.service'
import {StreamState} from '../../shared/models/streamState';

@Component({
  selector: 'app-tipparade',
  templateUrl: './tipparade.component.html',
  styleUrls: ['./tipparade.component.scss']
})
export class TipparadeComponent implements OnInit {

  songsFiles: Array<IObject> = [];

  currentFile?: {
    file: IObject
    index: number
    source: 'song'
  };

  Math: any;
  currentBackground: string | null = null;
  currentFileTitle: string | null = null;
  currentFileTitleId: number | null = null;
  currentFileCredit: string | null = null;
  currentFileAvatar: string | null = null;
  currentFilePosition: number | null = null;
  currentFilePreviousPosition: number | null = null;
  watchYouTubeUrl: string[] | null = null;
  currentYouTubeUrl: string  = '';
  state: StreamState | null = null;

  private tipparadeApiUrl = environment.top40TipparadeApiUrl;
  top40Tipparades$ : Observable<IObject[]> | null = null;

  constructor(
    private dataService: DataService,
    public audioService: AudioService,
    public playerService: PlayerService,
  ) { 

    this.dataService.loadTop40Objects(this.tipparadeApiUrl).subscribe(files => {
      this.songsFiles = files
      this.currentBackground = this.songsFiles[0].cover_img_url_large;
      this.currentFileTitle = this.songsFiles[0].title;
      this.currentFileCredit = this.songsFiles[0].credit;
      this.currentFilePosition = this.songsFiles[0].position;
      this.currentFilePreviousPosition = this.songsFiles[0].prev_position;
      this.currentFileTitleId = this.songsFiles[0].title_id;
      this.watchYouTubeUrl = this.songsFiles[0].youtube_url.split('watch?v=');
      this.currentYouTubeUrl = this.watchYouTubeUrl[0]+'embed/'+this.watchYouTubeUrl[1];    
    })
  }

  ngOnInit(): void {
  }


  openSong(file: IObject): void{
    this.playerService.updateCurrentFile(file);
  }

  setBackground(file: IObject): void {
    this.currentBackground = file.cover_img_url_large;
    this.currentFileTitle = file.title;
    this.currentFileCredit = file.credit;
    this.currentFilePosition = file.position;
    this.currentFilePreviousPosition = file.prev_position;
    this.currentFileTitleId = file.title_id;
  }

  setYouTubeUrl(file: IObject): void {
    this.watchYouTubeUrl = file.youtube_url.split('watch?v=');
    this.currentYouTubeUrl = this.watchYouTubeUrl[0]+'embed/'+this.watchYouTubeUrl[1]; 
  }

}
