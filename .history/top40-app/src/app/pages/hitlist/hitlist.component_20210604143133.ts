import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Hitlist } from 'src/app/models/hitlist';
import { HitlistsService } from 'src/app/services/hitlists.service';

@Component({
  selector: 'app-hitlist',
  templateUrl: './hitlist.component.html',
  styleUrls: ['./hitlist.component.scss'],
})
export class HitlistComponent implements OnInit {
  hitlists!: Hitlist[];

  constructor(
    private route: ActivatedRoute,
    private hitlistsService: HitlistsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getTop40(id);
    } else {
      // todo handle no route parameter exists
    }

    this.route.queryParams.subscribe((queryParams) => {
      // do something with the query params
    });

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
