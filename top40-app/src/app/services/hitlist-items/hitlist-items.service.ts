import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ItemDetails } from 'src/app/models/itemDetails';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HitlistItemsService {
    ITEMDETAILS_API = environment.hitListUrl;

    constructor(private http: HttpClient) {}

    fetchHitListDetails(id: number): Observable<ItemDetails> {
        const url = `${this.ITEMDETAILS_API}/titledetails_top40_json/${id}`;
        const details = this.http.get<ItemDetails>(url);
        return details;
    }
}
