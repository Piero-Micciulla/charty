import { AlbumsDataService } from './../../shared/services/top-40-albums/albums-data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Album} from '../../shared/models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  
  top40Albums$ : Observable<Album[]> | null = null;

  constructor(private albumsDataService: AlbumsDataService) { }

  ngOnInit(): void {

    this.top40Albums$ = this.albumsDataService.loadTop40AlbumsObject()
  }

}
