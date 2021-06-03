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
    this.getTop40();
  }

  getTop40(): void {
    this.hitlistsService
      .getTop40()
      .subscribe((hitlists) => (this.hitlists = hitlists));
  }
}
