import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from 'src/app/model/list';
import { ListTypeService } from 'src/app/services/list-type.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    countryCode?: any;
    country?: List;
    lists$?: Observable<List[]>;
    headerList?: List;

    constructor(
        private route: ActivatedRoute,
        private listService: ListTypeService,
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((routeParams) => {
            this.getHitList(Number(routeParams.id));
        });
    }

    getHitList(id: number): void {
        this.listService.getListById(id).subscribe((listItem) => {
            this.headerList = listItem;
        });
    }
}
