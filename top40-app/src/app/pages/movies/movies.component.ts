import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IObject} from '../../shared/models/object';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  private apiUrl = environment.top40MoviesApiUrl;
  top40Movies$ : Observable<IObject[]> | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.top40Movies$ = this.dataService.loadTop40Objects(this.apiUrl)


  }

}
