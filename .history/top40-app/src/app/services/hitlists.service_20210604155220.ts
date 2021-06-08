import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Hitlist } from '../models/hitlist';
import { HitlistComponent } from '../pages/hitlist/hitlist.component';

export const HITLIST_TYPES: HitlistType[] = [
  {
    id: 1,
    title: 'Top 40',
    size: 40,
  },
  {
    id: 2,
    title: 'Album Top 40',
    size: 40,
  },
  {
    id: 3,
    title: 'Tipparade',
    size: 30,
  },
  {
    id: 4,
    title: 'Movie Top 40',
    size: 40,
  },
];

export interface HitlistType {
  id: number;
  title: string;
  size: number;
}

@Injectable({
  providedIn: 'root',
})
export class HitListsService {
  // todo save this string in an environment variable
  hitlistUrl: string =
    'http://localhost:5000/http://www.top40.nl/app_api/top40_json';

  constructor(private http: HttpClient) {}

  getTop40(id: string): Observable<Hitlist[]> {
    const url = `${this.hitlistUrl}/${id}`;

    return this.http.get<Hitlist[]>(url);
  }

  public fetchAll(): Observable<HitList[]> {
    return of([]);
  }
}
