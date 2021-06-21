import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PositionDetails } from '../model/positionDetails';

@Injectable({
    providedIn: 'root',
})
export class PositionDetailsService {
    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }

    getPositionDetails(id: number): Observable<any> {
        return this.http.get<PositionDetails[]>(
            `${this.apiURL}/titledetails_top40_json/${id}`,
        );
    }
}
