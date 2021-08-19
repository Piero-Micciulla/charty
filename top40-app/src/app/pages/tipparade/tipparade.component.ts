import { IObject } from './../../shared/models/object';
import { DataService } from './../../shared/services/top-40-service/data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-tipparade',
  templateUrl: './tipparade.component.html',
  styleUrls: ['./tipparade.component.scss']
})
export class TipparadeComponent implements OnInit {

  private apiUrl = environment.top40TipparadeApiUrl;
  top40Tipparades$ : Observable<IObject[]> | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.top40Tipparades$ = this.dataService.loadTop40Objects(this.apiUrl)

  }

}
