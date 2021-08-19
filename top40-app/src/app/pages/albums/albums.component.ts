import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';  
import {environment} from '../../../environments/environment';
import {IObject} from '../../shared/models/object';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  private apiUrl = environment.top40AlbumsApiUrl;
  top40Albums$ : Observable<IObject[]> | null = null;
  albumTitleId: string | null = null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.top40Albums$ = this.dataService.loadTop40Objects(this.apiUrl);
    this.albumTitleId = this.route.snapshot.paramMap.get('title_id');
    console.log(this.albumTitleId)
  }

}
