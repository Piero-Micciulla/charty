import { Tipparade } from './../../models/tipparade';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {HttpResponse} from '../../models/http-response.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TipparadeDataService {


  private apiUrl = environment.top40TipparadeApiUrl;

  constructor(private http: HttpClient) { }

  loadTop40TipparadesObject(): Observable<Tipparade[]>{
    
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
}
