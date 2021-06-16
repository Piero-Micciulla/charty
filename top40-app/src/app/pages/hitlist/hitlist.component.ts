import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

import { HitList } from 'src/app/models/hitlist';
// import { Week } from 'src/app/models/week';
// import { Year } from 'src/app/models/year';
import { HitListsService } from 'src/app/services/hitlists/hitlists.service';
import {
    generateArrayOfYears,
    generateArrayOfWeeks,
} from 'src/app/lib/helpers';

@Component({
    selector: 'app-hitlist',
    templateUrl: './hitlist.component.html',
    styleUrls: ['./hitlist.component.scss'],
})
export class HitlistComponent implements OnInit {
    hitList!: HitList;
    // week!: Week;
    // year!: Year;
    activeHitListData: any[] = [];

    weeks = generateArrayOfWeeks();
    years = generateArrayOfYears();

    selectedWeek: number = 0;
    selectedYear: number = 0;

    length = 0;
    pageSize = 10;
    showFirstLastButtons = 'true';
    hidePageSize = 'true';

    constructor(
        private route: ActivatedRoute,
        private hitListsService: HitListsService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((routeParams) => {
            this.getHitList(Number(routeParams.id));
        });
    }

    getHitList(id: number): void {
        this.hitListsService.fetchHitListById(id).subscribe((hitList) => {
            this.hitList = hitList;
            this.length = hitList.positions.length;
            this.activeHitListData = this.hitList.positions.slice(
                0,
                this.pageSize
            );
            this.selectedWeek = hitList.week;
            this.selectedYear = hitList.year;
        });
    }

    public getPaginatorData(event: PageEvent) {
        let firstCut = event.pageIndex * event.pageSize;
        let secondCut = firstCut + event.pageSize;
        this.activeHitListData = this.hitList.positions.slice(
            firstCut,
            secondCut
        );
        // add scroll to top
    }
}
