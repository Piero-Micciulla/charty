import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IObject } from '../../models/object';
import { IObjectDetails } from '../../models/objectDetails';
import { HttpClient, HttpParams } from '@angular/common/http';
import {HttpResponse} from '../../models/http-response.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  objectDetails$: Observable<IObjectDetails> | null = null ;
  private apiUrl: string | null = null;

  constructor(private http: HttpClient) { }

  loadTop40Objects(apiUrl: string): Observable<IObject[]>{
    
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

      const httpObject$ = this.http.get<[HttpResponse]>(apiUrl, {params});

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

