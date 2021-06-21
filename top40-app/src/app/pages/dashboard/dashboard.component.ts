import { Component, OnInit } from '@angular/core';
import { HitList } from 'src/app/models/hitlist';
import {
    HitListsService,
    HITLIST_TYPES,
} from 'src/app/services/hitlists/hitlists.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    hitLists: HitList[] | undefined;
    hitlistTypes = HITLIST_TYPES;

    constructor(protected hitListService: HitListsService) {}

    ngOnInit(): void {
        this.fetchHitLists();
    }

    fetchHitLists(): void {
        this.hitListService.fetchAll().subscribe((hitLists: HitList[]) => {
            this.hitLists = hitLists;
        });
    }
}
