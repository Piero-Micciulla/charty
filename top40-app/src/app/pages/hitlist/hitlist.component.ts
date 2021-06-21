import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HitList } from 'src/app/models/hitlist';
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
    hitList: HitList | undefined;
    positions: Position[] | undefined;
    hitListId: number | undefined;

    activeHitListData: any[] | undefined;

    weeks = generateArrayOfWeeks();
    years = generateArrayOfYears();

    selectedWeek = 0;
    selectedYear = 0;

    length = 0;
    pageSize = 10;
    showFirstLastButtons = true;
    hidePageSize = true;

    videoList = '';
    dangerousVideoUrl: string | undefined;
    videoUrl: SafeResourceUrl | undefined;

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
            this.hitListId = hitList.id;
        });
    }

    searchHitList(week: number, year: number): void {
        if (this.hitListId) {
            this.hitListsService
                .findOtherHitList(this.hitListId, week, year)
                .subscribe((hitList) => {
                    this.hitList = hitList;
                });
            console.log(week, year);
        }
    }

    getPaginatorData(event: PageEvent): void {
        const firstCut = event.pageIndex * event.pageSize;
        const secondCut = firstCut + event.pageSize;
        if (this.hitList?.positions) {
            this.activeHitListData = this.hitList.positions.slice(
                firstCut,
                secondCut
            );
        }
        // scroll to top
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    updateVideoUrl(id: string): void {
        this.dangerousVideoUrl =
            'https://www.youtube.com/embed/videoseries?playlist=' + id;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.dangerousVideoUrl
        );
    }

    generateVideoList(list: any): void {
        this.videoList = '';
        for (const item of list) {
            if (item.youtubeCode === null) {
                this.videoList.replace('null', '');
            } else {
                this.videoList += item.youtubeCode + ',';
            }
        }
    }
}
