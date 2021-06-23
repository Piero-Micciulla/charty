import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List, Position } from '../model/list';
import { LIST_TYPES, Types } from '../model/types';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ListTypeService {
    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }

    /* get list type from API */
    getListTypes(type: Types): Observable<any> {
        return this.http.get<List[]>(
            `${this.apiURL}/top40_json/${type.id}`,
        ).pipe(
            map((response) => this.responseList(response, type)),
        );
    }

    getListById(id: number): Observable<List> {
        const type = LIST_TYPES.find((data: Types) => {
            console.log(data.id, '----------', id, '************');
            return data.id === id;
        });

        if (! type) {
            throw new Error(
                `Not found ${id}`,

            );
        }
        return this.getListTypes(type);
    }

    getListBySearch(id: number, week: number, year: number): Observable<List> {
        const type = LIST_TYPES.find((listType: Types) => listType.id === id);

        if (! type) {
            throw new Error(
                `Unable to fetch hitlist for id ${id}: the type for this hitlist is not found`,
            );
        }

        const url = `${this.apiURL}/top40_json/${type.id}?week=${week}&year=${year}`;

        return this.http.get<HttpResponse<any>>(url).pipe(
            map((response) => this.responseList(response, type)),
        );

    }

    public getAll(): Observable<List[]> {
        const listCollection: Observable<List>[] = [];

        for (const type of LIST_TYPES) {
            const newList = this.getListTypes(type);
            listCollection.push(newList);
        }

        const observable: Observable<List[]> = forkJoin(listCollection);

        return observable;
    }
    private responseList(response: any, type: Types): List {
        const res = response[0];
        const { positions } = res;
        const positionArray: Position[] = [];
        for (const item of positions) {
            positionArray.push({
                position: item.position,
                label: item.label,
                titleId: item.title_id,
                title: item.title,
                credit: item.credit,
                imageCover: item.cover_img_url,
                imageSmall: item.cover_img_url_small,
                imageMedium: item.cover_img_url_medium,
                imageLarge: item.cover_img_url_large,
                youtubeCode: item.youtube_code,

            });
        }

        const list: List = {
            id: type.id,
            year: res.year,
            week: res.week,
            positions: positionArray,
            name: type.title,
        };

        return list;
    }
}
