import { Tipparade } from './../../shared/models/tipparade';
import { TipparadeDataService } from './../../shared/services/top-40-tipparade/tipparade-data.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-tipparade',
  templateUrl: './tipparade.component.html',
  styleUrls: ['./tipparade.component.scss']
})
export class TipparadeComponent implements OnInit {

  top40Tipparades$ : Observable<Tipparade[]> | null = null;

  constructor(private tipparadesDataService: TipparadeDataService) { }

  ngOnInit(): void {

    this.top40Tipparades$ = this.tipparadesDataService.loadTop40TipparadesObject()

  }

}
