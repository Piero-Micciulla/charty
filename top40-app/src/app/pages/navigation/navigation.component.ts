import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HITLIST_TYPES } from 'src/app/services/hitlists/hitlists.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    hitlistTypes = HITLIST_TYPES;
    opened: boolean | undefined;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {}
}
