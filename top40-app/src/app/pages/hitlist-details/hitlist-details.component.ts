import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { ItemDetails } from 'src/app/models/itemDetails';
import { HitlistItemsService } from 'src/app/services/hitlist-items/hitlist-items.service';

@Component({
    selector: 'app-hitlist-details',
    templateUrl: './hitlist-details.component.html',
    styleUrls: ['./hitlist-details.component.scss'],
})
export class HitlistDetailsComponent implements OnInit {
    itemDetails: ItemDetails | undefined;
    panelOpenState = false;

    constructor(
        private route: ActivatedRoute,
        private hitListItemsService: HitlistItemsService,
        private location: Location,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.getHitListDetails();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    getHitListDetails(): void {
        const itemId = this.route.snapshot.paramMap.get('id');

        this.hitListItemsService
            .fetchHitListDetails(Number(itemId))
            .subscribe((itemDetails) => (this.itemDetails = itemDetails));
    }

    goBack(): void {
        this.location.back();
    }
}
