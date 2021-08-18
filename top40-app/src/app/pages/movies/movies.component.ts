import { MoviesDataService } from './../../shared/services/top-40-movies/movies-data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  top40Movies$ : Observable<Movie[]> | null = null;

  constructor(private moviesDataService: MoviesDataService) { }

  ngOnInit(): void {

    this.top40Movies$ = this.moviesDataService.loadTop40MoviesObject()

    // this.top40Movies$.subscribe(
    //   moviesArray => moviesArray,
    //   () => {},
    //   () => console.log('completed')
    // )

  }

}
