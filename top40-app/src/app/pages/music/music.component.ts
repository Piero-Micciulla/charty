import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IObject} from '../../shared/models/object';
import {environment} from '../../../environments/environment'


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  private apiUrl = environment.top40SongsApiUrl;
  top40Songs$ : Observable<IObject[]> | null = null;

  constructor(private dataService: DataService) { 

  }

  ngOnInit(){

    this.top40Songs$ = this.dataService.loadTop40Objects(this.apiUrl)


    // this.top40Songs$.subscribe(
    //   songsArray => songsArray,
    //   () => {},
    //   () => console.log('completed')
    // )

  }

}
