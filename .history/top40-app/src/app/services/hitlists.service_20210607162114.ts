import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HitList, Position } from '../models/hitlist';
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

  fetchHitList(id: string): Observable<HitList> {
    const url = `${this.hitlistUrl}/${id}`;
    return this.http.get<HttpResponse<any>>(url).pipe(
      map((response) => {
        return this.parseHitList(response, id);
      })
    );
  }

  public fetchAll(): Observable<HitList[]> {
    let hitListArray: Observable<HitList[]>;

    // call fetchHitList for every known id
    for (let type of HITLIST_TYPES) {
      const newHitList = this.fetchHitList(String(type.id));
      
      // merge returned Observables into a HitList[];
      hitListArray.forkJoin(newHitList);
    }
    // return that HitList[];
    return hitListArray;
  }

  private parseHitList(response: any, id: string): HitList {
    const hitListObject = response[0];
    const positions = hitListObject.positions;
    const positionArray: Position[] = [];

    for (let position of positions) {
      positionArray.push({
        position: position.position,
        title: position.title,
        credit: position.credit,
        image: position.cover_img_url_medium,
      });
    }

    const hitList: HitList = {
      id: id,
      year: hitListObject.year,
      week: hitListObject.week,
      positions: positionArray,
    };

    return hitList;
  }
}
