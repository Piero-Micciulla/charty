import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit, Input } from '@angular/core';
import {Observable, merge} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IObject} from '../../shared/models/object';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {AudioService} from '../../shared/services/audio-service/audio.service';
import {PlayerService} from '../../shared/services/player.service'
import {StreamState} from '../../shared/models/streamState';
import {PlayerComponent} from '../../components/player/player.component';


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

  currentFileTitle: string | null = null;
  currentFileCredit: string | null = null;
  currentFileAvatar: string | null = null;
  state: StreamState | null = null;

  private apiAlbumsUrl = environment.top40AlbumsApiUrl;
  private apiSongsUrl = environment.top40SongsApiUrl;

  top40Albums$ : Observable<IObject[]> | null = null;
  top40Songs$ : Observable<IObject[]> | null = null;
  
  constructor(
    private dataService: DataService,
    public audioService: AudioService,
    public playerService: PlayerService,
  ) { 

    this.top40Albums$ = this.dataService.loadTop40Objects(this.apiAlbumsUrl);
    this.top40Songs$ = this.dataService.loadTop40Objects(this.apiSongsUrl);

    this.dataService.loadTop40Objects(this.apiAlbumsUrl).subscribe(files => {
      this.albumsFiles = files 
    })

    this.dataService.loadTop40Objects(this.apiSongsUrl).subscribe(files => {
      this.songsFiles = files 
    })

    
    
    // merge(this.top40Albums$, this.top40Songs$).pipe(
    //   // merge both results of the two observables
    // ).subscribe(files => {
    //     this.playerService.fileSubject.next(files);
    // })

    
  }

  ngOnInit(): void {
  //   this.top40Albums$ = this.dataService.loadTop40Objects(this.apiAlbumsUrl);
  //   this.top40Songs$ = this.dataService.loadTop40Objects(this.apiSongsUrl);  
  }

  playStream(url: string) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }
  // todo refactor to playFile?
  // moving the logic to open a file in the specific component
  openFile(file: IObject, index: number, source: 'song' | 'album') {

    // this.playerService.play(file);

    // HomeComponent -> PlayerService -> PlayerComponent -> AudioService -> Play
    
    this.currentFile = { index, file, source };
    this.playerService.saveData(index, source, file);
    console.log(this.currentFile)
    this.audioService.stop();
    this.playStream(file.itunes_track_preview_url);
    
  }
}
