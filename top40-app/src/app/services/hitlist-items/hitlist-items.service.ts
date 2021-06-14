import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { itemDetails } from 'src/app/models/itemDetails';

@Injectable({
  providedIn: 'root',
})
export class HitlistItemsService {
  hitListUrl = 'http://localhost:5000/http://www.top40.nl/app_api';

  constructor(private http: HttpClient) {}

  fetchHitListDetails(id: number): Observable<itemDetails> {
    const url = `${this.hitListUrl}/titledetails_top40_json/${id}`;
    const details = this.http.get<itemDetails>(url);
    console.log(details);
    return details;
  }
}
