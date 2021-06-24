import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Artist, ItemDetails } from 'src/app/models/itemDetails';
import { HitlistItemsService } from 'src/app/services/hitlist-items/hitlist-items.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-hitlist-details',
    templateUrl: './hitlist-details.component.html',
    styleUrls: ['./hitlist-details.component.scss'],
})
export class HitlistDetailsComponent implements OnInit {
    itemDetails: ItemDetails | undefined;
    panelOpenState = false;
    lyrics: string | undefined;
    loading$ = this.loader.loading$;

    constructor(
        private route: ActivatedRoute,
        private hitListItemsService: HitlistItemsService,
        private location: Location,
        public loader: LoadingService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((routeParams) => {
            this.getHitListDetails(Number(routeParams.id));
        });
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    getHitListDetails(id: number): void {
        this.hitListItemsService
            .fetchHitListDetails(Number(id))
            .subscribe((itemDetails) => {
                this.itemDetails = itemDetails;
                this.cleanUpLyricsString(itemDetails.songwiki_lyrics);
            });
    }

    cleanUpLyricsString(songLyrics: string): void {
        const replaceTheseCharacters = /\r\n/gi;
        this.lyrics = songLyrics.replace(replaceTheseCharacters, '<br>');
    }

    goBack(): void {
        this.location.back();
    }
}
