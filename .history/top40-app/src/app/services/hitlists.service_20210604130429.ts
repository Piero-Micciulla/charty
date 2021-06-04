import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Hitlist } from '../models/hitlist';
import { HitlistComponent } from '../pages/hitlist/hitlist.component';

export 

@Injectable({
  providedIn: 'root',
})
export class HitlistsService {
  // todo save this string in an environment variable
  hitlistUrl: string =
    'http://localhost:5000/http://www.top40.nl/app_api/top40_json';

  constructor(private http: HttpClient) {}

  getTop40(id: string): Observable<Hitlist[]> {
    const url = `${this.hitlistUrl}/${id}`;

    return this.http.get<Hitlist[]>(url);
  }
}
