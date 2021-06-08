import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HitList } from 'src/app/models/hitlist';
import { HitListsService } from 'src/app/services/hitlists.service';

@Component({
  selector: 'app-hitlist',
  templateUrl: './hitlist.component.html',
  styleUrls: ['./hitlist.component.scss'],
})
export class HitlistComponent implements OnInit {
  hitLists!: HitList;

  constructor(
    private route: ActivatedRoute,
    private hitListsService: HitListsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.getTop40(routeParams.id);
    });
  }

  getTop40(id: string): void {
    this.hitListsService
      .fetchHitList(id)
      .subscribe((hitlists) => (this.hitLists = hitlists));
  }
}
