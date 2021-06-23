import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from 'src/app/model/list';
import { ListTypeService } from 'src/app/services/list-type.service';
import {
    createYears,
    createWeeks,
} from '../../../shared/weeks_years';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    lists$?: Observable<List[]>;
    headerList?: List;
    detailListData: any[] = [];
    listId?: number;

    weeks = createWeeks();
    years = createYears();

    selectedWeek = 0;
    selectedYear = 0;

    constructor(
        private route: ActivatedRoute,
        private listService: ListTypeService,
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((routeParams) => {
            this.getList(Number(routeParams.id));
        });
        this.route.params.subscribe((routeParams) => {
            this.getListDetails(Number(routeParams.id));
        });
    }

    getList(id: number): void {
        this.listService.getListById(id).subscribe((listItem) => {
            this.headerList = listItem;
        });
    }
    getListDetails(id: number): void {
        this.listService.getListById(id).subscribe((data) => {
            this.headerList = data;
            this.detailListData = this.headerList.positions.slice(0);
            this.selectedWeek = data.week;
            this.selectedYear = data.year;
            this.listId = data.id;
        });
    }
    searchByWeekYear(week: number, year: number): void {
        if (this.listId) {
            this.listService
                .getListBySearch(this.listId, week, year)
                .subscribe((data) => {
                    this.headerList = data;
                    this.detailListData = this.headerList.positions.slice(0);
                });
        }
    }
}
