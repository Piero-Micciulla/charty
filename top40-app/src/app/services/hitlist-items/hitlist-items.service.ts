import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ItemDetails } from 'src/app/models/itemDetails';

@Injectable({
    providedIn: 'root',
})
export class HitlistItemsService {
    hitListUrl = 'http://localhost:5000/http://www.top40.nl/app_api';

    constructor(private http: HttpClient) {}

    fetchHitListDetails(id: number): Observable<ItemDetails> {
        const url = `${this.hitListUrl}/titledetails_top40_json/${id}`;
        const details = this.http.get<ItemDetails>(url);
        console.log(details);
        return details;
    }
}
