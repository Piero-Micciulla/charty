import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IObject} from '../../shared/models/object';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private apiAlbumsUrl = environment.top40AlbumsApiUrl;
  private apiSongsUrl = environment.top40SongsApiUrl;

  top40Albums$ : Observable<IObject[]> | null = null;
  top40Songs$ : Observable<IObject[]> | null = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.top40Albums$ = this.dataService.loadTop40Objects(this.apiAlbumsUrl);
    this.top40Songs$ = this.dataService.loadTop40Objects(this.apiSongsUrl);
  }

}
