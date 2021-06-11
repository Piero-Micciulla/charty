import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { HitList } from 'src/app/models/hitlist';
import { itemDetails } from 'src/app/models/itemDetails';
import { HitListsService } from 'src/app/services/hitlists.service';

@Component({
  selector: 'app-hitlist-details',
  templateUrl: './hitlist-details.component.html',
  styleUrls: ['./hitlist-details.component.scss'],
})
export class HitlistDetailsComponent implements OnInit {
  hitList!: HitList;
  itemDetails!: itemDetails;
  dangerousVideoUrl!: string;
  videoUrl!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private hitListsService: HitListsService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getHitListDetails();
    this.updateVideoUrl();
  }

  getHitListDetails(): void {
    const itemId = this.route.snapshot.paramMap.get('id');

    this.hitListsService
      .fetchHitListDetails(Number(itemId))
      .subscribe((itemDetails) => (this.itemDetails = itemDetails));
  }

  goBack(): void {
    this.location.back();
  }

  updateVideoUrl() {
    this.dangerousVideoUrl = this.itemDetails.youtube_url;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerousVideoUrl
    );
  }
}
