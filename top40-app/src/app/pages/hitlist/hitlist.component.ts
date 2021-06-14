import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HitList } from 'src/app/models/hitlist';
import { HitListsService } from 'src/app/services/hitlists/hitlists.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-hitlist',
  templateUrl: './hitlist.component.html',
  styleUrls: ['./hitlist.component.scss'],
})
export class HitlistComponent implements OnInit {
  hitList!: HitList;
  activeHitListData: any[] = [];

  length = 0;
  pageSize = 10;
  showFirstLastButtons = 'true';
  hidePageSize = 'true';

  constructor(
    private route: ActivatedRoute,
    private hitListsService: HitListsService
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
      this.activeHitListData = this.hitList.positions.slice(0, this.pageSize);
    });
  }

  public getPaginatorData(event: PageEvent) {
    let firstCut = event.pageIndex * event.pageSize;
    let secondCut = firstCut + event.pageSize;
    this.activeHitListData = this.hitList.positions.slice(firstCut, secondCut);
    // add scroll to top
  }
}
