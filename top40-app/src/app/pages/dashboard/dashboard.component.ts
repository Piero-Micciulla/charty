import { Component, OnInit } from '@angular/core';
import { HitList } from 'src/app/models/hitlist';
import { HitListsService } from 'src/app/services/hitlists/hitlists.service';
import { HITLIST_TYPES } from '../../models/hitListTypes';

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
