import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../models/album';
import { HttpClient, HttpParams } from '@angular/common/http';
import {HttpResponse} from '../../models/http-response.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlbumsDataService {

  
  private apiUrl = environment.top40AlbumsApiUrl;

  constructor(private http: HttpClient) { }

  loadTop40AlbumsObject(): Observable<Album[]>{
    
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
