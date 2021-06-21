import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Artist, ItemDetails } from 'src/app/models/itemDetails';
import { HitlistItemsService } from 'src/app/services/hitlist-items/hitlist-items.service';

@Component({
    selector: 'app-hitlist-details',
    templateUrl: './hitlist-details.component.html',
    styleUrls: ['./hitlist-details.component.scss'],
})
export class HitlistDetailsComponent implements OnInit {
    itemDetails: ItemDetails | undefined;
    panelOpenState = false;
    biography: string | undefined;
    lyrics: string | undefined; // \r\n vervangen door <br>

    constructor(
        private route: ActivatedRoute,
        private hitListItemsService: HitlistItemsService,
        private location: Location
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
                this.showHTML(itemDetails.artists);
            });
    }

    showHTML(artists: Array<Artist>): void {
        for (let artist of artists) {
            this.biography = artist.biography;
        }
        // toont alleen de laatste bio bij alle artiesten in het geval er meerdere artiesten zijn. Nog oplossing voor vinden.
    }

    cleanUpLyricsString(songLyrics: string): void {
        const replaceTheseCharacters = /\r\n/gi;
        this.lyrics = songLyrics.replace(replaceTheseCharacters, '<br>');
    }

    goBack(): void {
        this.location.back();
    }
}
