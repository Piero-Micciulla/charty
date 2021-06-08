import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HitList } from '../models/hitlist';
import { HitlistComponent } from '../pages/hitlist/hitlist.component';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

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

  fetchHitList(id: string): Observable<any> {
    const url = `${this.hitlistUrl}/${id}`;

    let response = this.http.get<HttpResponse<any>>(url).pipe(
      map((response: any) => {

        const hitListObject = response[0];

        const hitList: HitList = {
          id: id,

        }

        // const positions = hitListObject.positions
        return hitList;
      })
    );

    // Observable<Hitlijst>

    console.log(response);

    response.subscribe((response) => {
      console.log(response);
    });

    return of([]);

    // todo parse http get return values
  }

  public fetchAll(): Observable<HitList[]> {
    return of([]);
  }
}
