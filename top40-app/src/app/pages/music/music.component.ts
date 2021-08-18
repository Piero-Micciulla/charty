import { SongsDataService } from './../../shared/services/top-40-songs/songs-data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Song} from '../../shared/models/song';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  
  top40Songs$ : Observable<Song[]> | null = null;

  constructor(private songsDataService: SongsDataService) { 

  }

  ngOnInit(){

    this.top40Songs$ = this.songsDataService.loadTop40SongsObject()


    // this.top40Songs$.subscribe(
    //   songsArray => songsArray,
    //   () => {},
    //   () => console.log('completed')
    // )

  }

}
