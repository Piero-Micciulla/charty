import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IObject } from '../../models/object';
import { HttpClient, HttpParams } from '@angular/common/http';
import {HttpResponse} from '../../models/http-response.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {


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
}