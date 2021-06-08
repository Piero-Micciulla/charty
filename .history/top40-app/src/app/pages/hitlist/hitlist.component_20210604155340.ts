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
  hitlists!: Hitlist[];

  constructor(
    private route: ActivatedRoute,
    private hitlistsService: HitListsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.getTop40(routeParams.id);
    });
  }

  getTop40(id: string): void {
    this.hitlistsService
      .getTop40(id)
      .subscribe((hitlists) => (this.hitlists = hitlists));
  }
}
