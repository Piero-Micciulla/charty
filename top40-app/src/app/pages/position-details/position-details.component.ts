import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionDetails } from 'src/app/model/positionDetails';
import getYouTubeID from 'get-youtube-id';
import { Location } from '@angular/common';

import { PositionDetailsService } from 'src/app/services/position-details.service';

@Component({
    selector: 'app-position-details',
    templateUrl: './position-details.component.html',
    styleUrls: ['./position-details.component.scss'],
})
export class PositionDetailsComponent implements OnInit {
    positionDetails?: PositionDetails;
    videoID?: any;
    constructor(private route: ActivatedRoute,
        private positionService: PositionDetailsService,
        private location: Location) { }

    ngOnInit(): void {
        this.getPositionDetails();
    }
    getPositionDetails(): void {
        const id = this.route.snapshot.paramMap.get('id');

        this.positionService
            .getPositionDetails(Number(id))
            .subscribe((data) => {
                this.positionDetails = data;
                this.videoID = getYouTubeID(data.youtube_url);
                console.log(this.videoID);
            });
    }
    goBack(): void {
        this.location.back();
    }

}
