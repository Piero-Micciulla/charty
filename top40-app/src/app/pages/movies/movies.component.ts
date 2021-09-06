// import { DataService } from './../../shared/services/top-40-service/data.service';
// import { Component, OnInit } from '@angular/core';
// import {Observable} from 'rxjs';
// import {IObject} from '../../shared/models/object';
// import {environment} from '../../../environments/environment'
import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IObject} from '../../shared/models/object';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesFiles: Array<IObject> = [];

  Math: any;
  currentBackground: string | null = null;
  currentFileTitle: string | null = null;
  currentFileTitleId: number | null = null;
  currentFileCredit: string | null = null;
  currentFileAvatar: string | null = null;
  currentFileLabel: string | null = null;
  currentFilePosition: number | null = null;
  currentFilePreviousPosition: number | null = null;
  
  private apiMoviesUrlEndpoint = environment.top40MoviesApiUrlEndpoint;


  

  constructor(private dataService: DataService) { 
    this.Math = Math;



    this.dataService.loadTop40Objects(this.apiMoviesUrlEndpoint).subscribe(files => {
      this.moviesFiles = files
      this.currentBackground = this.moviesFiles[0].cover_img_url_large;
      this.currentFileTitle = this.moviesFiles[0].title;
      this.currentFileCredit = this.moviesFiles[0].credit;
      this.currentFilePosition = this.moviesFiles[0].position;
      this.currentFilePreviousPosition = this.moviesFiles[0].prev_position;
      this.currentFileTitleId = this.moviesFiles[0].title_id;
      this.currentFileLabel = this.moviesFiles[0].label;
    })
  }

  ngOnInit(): void {
  }

  setBackground(file: IObject): void {
    this.currentBackground = file.cover_img_url_large;
    this.currentFileTitle = file.title;
    this.currentFileCredit = file.credit;
    this.currentFilePosition = file.position;
    this.currentFilePreviousPosition = file.prev_position;
    this.currentFileTitleId = file.title_id;
    this.currentFileLabel = file.label;
  }

}
