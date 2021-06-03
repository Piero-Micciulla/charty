import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Hitlist } from '../models/hitlist';

@Injectable({
  providedIn: 'root',
})
export class HitlistsService {
  hitlistUrl: string =
    'http://localhost:5000/http://www.top40.nl/app_api/top40_json';

  constructor(private http: HttpClient) {}

  getTop40(): Observable<Hitlist[]> {
    const url = `${this.hitlistUrl}/1`;
    const allTopSongs = this.http.get<Hitlist[]>(url);

    return allTopSongs;
  }
}