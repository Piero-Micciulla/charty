import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Song } from '../models/song';

@Injectable({
  providedIn: 'root',
})
export class Top40Service {
  top40Url: string = 'http://www.top40.nl/app_api/top40_json';

  constructor(private http: HttpClient) {}

  getTop40(): Observable<Song[]> {
    const url = `${this.top40Url}/1`;
    const allTopSongs = this.http.get<Song[]>(url);

    return allTopSongs;
  }
}
