import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { IObject } from '../../models/object';
import { IObjectDetails } from '../../models/objectDetails';
import { HttpClient, HttpParams } from '@angular/common/http';
import {HttpResponse} from '../../models/http-response.model';
import { filter, map, tap, toArray } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  objectDetails$: Observable<IObjectDetails> | null = null ;
  apiUrl: string = '';
  
  week: string | undefined = undefined ;
  year: string | undefined = undefined ;
  

  constructor(private http: HttpClient) { 
    
  }
  
  getNewParamsFilters(week: string, year: string){
    const filterParams = of(week, year);
    filterParams
    .pipe(toArray())
    .subscribe(val => {
      this.week = val[0]
      this.year = val[1]
     }
    )
    
  }
  

  loadTop40Objects(endpoint: string): Observable<IObject[]>{
    if(this.week && this.year){
      this.apiUrl = `https://www.top40.nl/app_api/top40_json/${endpoint}?week=${this.week}&year=${this.year}`      
    } else {
      this.apiUrl = `https://www.top40.nl/app_api/top40_json/${endpoint}`
    }
    
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

      const httpObject$ = this.http.get<[HttpResponse]>(this.apiUrl, {params});

      return httpObject$.pipe(
        tap(console.log),
        map((httpResponse: HttpResponse[]) => {
          return httpResponse[0].positions;
        })
      )
      
  }


  loadObjectdetails(title_id: number): Observable<IObjectDetails>{

    const detailUrl = `https://www.top40.nl/app_api/titledetails_top40_json/${title_id}`;
    this.objectDetails$ = this.http.get<IObjectDetails>(detailUrl);

    return this.objectDetails$.pipe(
      objectDetails => objectDetails
    )
    
  }
}

