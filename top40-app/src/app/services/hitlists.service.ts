import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HitList, Position } from '../models/hitlist';

export const HITLIST_TYPES: HitListType[] = [
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

export interface HitListType {
  id: number;
  title: string;
  size: number;
}

@Injectable({
  providedIn: 'root',
})
export class HitListsService {
  // todo save this string in an environment variable
  hitListUrl = 'http://localhost:5000/http://www.top40.nl/app_api/top40_json';

  constructor(private http: HttpClient) {}

  fetchHitList(id: number): Observable<HitList> {
    const url = `${this.hitListUrl}/${id}`;

    // call API
    return this.http.get<HttpResponse<any>>(url).pipe(
      map((response) => {
        // return new hitList
        return this.parseHitList(response, HITLIST_TYPES[id - 1]);
      })
    );
  }

  public fetchAll(): Observable<HitList[]> {
    const hitListArray: Observable<HitList>[] = [];

    // call fetchHitList for every known id
    for (const type of HITLIST_TYPES) {
      const newHitList = this.fetchHitList(type.id);
      hitListArray.push(newHitList);
    }

    // merge returned Observables into a HitList[];
    const observable: Observable<HitList[]> = forkJoin(hitListArray);

    // return that HitList[];
    return observable;
  }

  private parseHitList(response: any, listOverview: any): HitList {
    const hitListObject = response[0];
    const positions = hitListObject.positions;
    const positionArray: Position[] = [];

    for (const position of positions) {
      positionArray.push({
        position: position.position,
        title: position.title,
        credit: position.credit,
        image: position.cover_img_url_medium,
      });
    }

    const hitList: HitList = {
      id: listOverview.id,
      year: hitListObject.year,
      week: hitListObject.week,
      positions: positionArray,
      name: listOverview.title,
    };

    return hitList;
  }
}
