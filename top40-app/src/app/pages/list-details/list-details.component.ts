import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller,
} from 'swiper/core';

import { List, Position } from 'src/app/model/list';
import { ListTypeService } from 'src/app/services/list-type.service';

import { SwiperComponent } from 'swiper/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// install Swiper components
SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller,
]);

@Component({
    selector: 'app-list-details',
    templateUrl: './list-details.component.html',
    styleUrls: ['./list-details.component.scss'],
})
export class ListDetailsComponent implements OnInit {
    detailList?: List;
    positions?: Position;
    detailListData: any[] = [];

    @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

    show?: boolean;
    thumbs: any;

    videoList = '';
    errorUrl!: string;
    videoUrl?: SafeResourceUrl;

    constructor(private listService: ListTypeService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private location: Location) { }

    ngOnInit(): void {
        this.route.params.subscribe((routeParams) => {
            this.getListDetails(Number(routeParams.id));
        });

    }
    getListDetails(id: number): void {
        this.listService.getListById(id).subscribe((data) => {
            this.detailList = data;
            this.detailListData = this.detailList.positions.slice(0);
            this.generateVideoList(data.positions);
            this.updateVideoUrl(this.videoList);

        });
    }

    updateVideoUrl(id: string) {
        this.errorUrl = `https://www.youtube.com/embed/videoseries?playlist=${id}`;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.errorUrl,
        );
    }

    generateVideoList(list: any): void {
        for (const item of list) {
            this.videoList += `${item.youtubeCode},`;
        }
    }

    thumbsSwiper: any;
    setThumbsSwiper(swiper: any) {
        this.thumbsSwiper = swiper;
    }
    controlledSwiper: any;
    setControlledSwiper(swiper: any) {
        this.controlledSwiper = swiper;
    }

    indexNumber = 1;
    exampleConfig = { slidesPerView: 3 };
    slidesPerView: number = 4;
    pagination: any = false;

    slides2 = ['slide 1', 'slide 2', 'slide 3'];
    replaceSlides() {
        this.slides2 = ['foo', 'bar'];
    }

    togglePagination() {
        if (! this.pagination) {
            this.pagination = { type: 'fraction' };
        } else {
            this.pagination = false;
        }
    }

    navigation = false;
    toggleNavigation() {
        this.navigation = ! this.navigation;
    }

    scrollbar: any = false;
    toggleScrollbar() {
        if (! this.scrollbar) {
            this.scrollbar = { draggable: true };
        } else {
            this.scrollbar = false;
        }
    }
    breakpoints = {
        640: { slidesPerView: 2, spaceBetween: 30 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
    };

    slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
    virtualSlides = Array.from({ length: 600 }).map(
        (el, index) => `Slide ${index + 1}`,
    );

    breakPointsToggle?: boolean;
    breakpointChange() {
        this.breakPointsToggle = ! this.breakPointsToggle;
        this.breakpoints = {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 30 },
        };
    }

    goBack(): void {
        this.location.back();
    }
}
