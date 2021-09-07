import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IObject} from '../../shared/models/object';
import {AudioService} from '../../shared/services/audio-service/audio.service';
import {PlayerService} from '../../shared/services/player.service'
import {FilterService} from '../../shared/services/filter-service/filter.service';
import {StreamState} from '../../shared/models/streamState';
import { FormGroup, FormControl} from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albumsFiles: Array<IObject> = [];
  songsFiles: Array<IObject> = [];


  currentFile?: {
    file: IObject
    index: number
    source: 'song' | 'album'
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
  status: boolean = false;

  // setting weeks/years values 
  range = function range(size: number, startAt = 0): number[] {
    return [...Array(size).keys()].map(i => i + startAt);
  }

  weeksOptions: string[] = this.range(52, 1).reverse().map(String)
  yearOptions: string[] = this.range(56, 1965).reverse().map(String)
  
  form = new FormGroup({
    weeks: new FormControl(''),
    year: new FormControl('')
  }); 


  private apiAlbumsUrlEndpoint = environment.top40AlbumsApiUrlEndpoint;
  private apiSongsUrlEndpoint = environment.top40SongsApiUrlEndpoint;

  top40Albums$ : Observable<IObject[]> | null = null;
  top40Songs$ : Observable<IObject[]> | null = null;

 



  constructor(
    private dataService: DataService,
    public audioService: AudioService,
    public playerService: PlayerService,
    public filterService: FilterService,
  ) {
    this.Math = Math;
    
    this.top40Albums$ = this.dataService.loadTop40Objects(this.apiAlbumsUrlEndpoint);
    this.top40Songs$ = this.dataService.loadTop40Objects(this.apiSongsUrlEndpoint);

    this.dataService.loadTop40Objects(this.apiAlbumsUrlEndpoint).subscribe(files => {
      this.albumsFiles = files
      this.currentBackground = this.albumsFiles[0].cover_img_url_large;
      this.currentFileTitle = this.albumsFiles[0].title;
      this.currentFileCredit = this.albumsFiles[0].credit;
      this.currentFilePosition = this.albumsFiles[0].position;
      this.currentFilePreviousPosition = this.albumsFiles[0].prev_position;
      this.currentFileTitleId = this.albumsFiles[0].title_id;
    })

    this.dataService.loadTop40Objects(this.apiSongsUrlEndpoint).subscribe(files => {
      this.songsFiles = files
      this.watchYouTubeUrl = this.songsFiles[0].youtube_url.split('watch?v=');
      this.currentYouTubeUrl = this.watchYouTubeUrl[0]+'embed/'+this.watchYouTubeUrl[1];    
    })

  }

  ngOnInit(): void {
  }



  openSong(file: IObject): void{
    this.playerService.updateCurrentFile(file);
  }

  openAlbum(file: IObject): void {
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
  
  submit(){
    this.filterService.changeFilters(this.form.value.weeks, this.form.value.year)
    this.dataService.getNewParamsFilters(this.form.value.weeks, this.form.value.year);
    this.dataService.loadTop40Objects(this.apiAlbumsUrlEndpoint).subscribe(files => {
      this.albumsFiles = files
      this.currentBackground = this.albumsFiles[0].cover_img_url_large;
      this.currentFileTitle = this.albumsFiles[0].title;
      this.currentFileCredit = this.albumsFiles[0].credit;
      this.currentFilePosition = this.albumsFiles[0].position;
      this.currentFilePreviousPosition = this.albumsFiles[0].prev_position;
      this.currentFileTitleId = this.albumsFiles[0].title_id;
    })
    this.dataService.loadTop40Objects(this.apiSongsUrlEndpoint).subscribe(files => {
      this.songsFiles = files
    })  
  }
}
