import { Component, OnInit } from '@angular/core';
import { HitList } from 'src/app/models/hitlist';
import { HitListsService } from 'src/app/services/hitlists/hitlists.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { HITLIST_TYPES } from '../../models/hitListTypes';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    hitLists: HitList[] | undefined;
    hitlistTypes = HITLIST_TYPES;
    loading$ = this.loader.loading$;

    constructor(
        protected hitListService: HitListsService,
        public loader: LoadingService
    ) {}

    ngOnInit(): void {
        this.fetchHitLists();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    fetchHitLists(): void {
        this.hitListService.fetchAll().subscribe((hitLists: HitList[]) => {
            this.hitLists = hitLists;
        });
    }
}
