import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HitList } from 'src/app/models/hitlist';
// import { Week } from 'src/app/models/week';
// import { Year } from 'src/app/models/year';
import { HitListsService } from 'src/app/services/hitlists/hitlists.service';
import {
    generateArrayOfYears,
    generateArrayOfWeeks,
} from 'src/app/lib/helpers';
import { Position } from '@angular/compiler';

@Component({
    selector: 'app-hitlist',
    templateUrl: './hitlist.component.html',
    styleUrls: ['./hitlist.component.scss'],
})
export class HitlistComponent implements OnInit {
    hitList!: HitList;
    positions!: Position;
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

    videoList = '';
    dangerousVideoUrl!: string;
    videoUrl!: SafeResourceUrl;

    constructor(
        private route: ActivatedRoute,
        private hitListsService: HitListsService,
        private sanitizer: DomSanitizer
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
            this.generateVideoList(hitList.positions);
            this.updateVideoUrl(this.videoList);
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

    updateVideoUrl(id: string) {
        this.dangerousVideoUrl =
            'https://www.youtube.com/embed/videoseries?playlist=' + id;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.dangerousVideoUrl
        );
    }

    generateVideoList(list: any): void {
        for (let item of list) {
            if (item.youtubeCode === null) {
                this.videoList.replace('null', '');
            } else {
                this.videoList += item.youtubeCode + ',';
            }
        }
    }
}
