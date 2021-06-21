import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/model/list';
import { ListTypeService } from 'src/app/services/list-type.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    lists$?: Observable<List[]>;

    constructor(private listService: ListTypeService) { }

    ngOnInit(): void {
        this.getLists();
    }
    getLists(): void {
        this.lists$ = this.listService.getAll();
        console.log('List all ', this.lists$);

    }
}
