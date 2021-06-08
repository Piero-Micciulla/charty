import { Component, OnInit } from '@angular/core';
import { Hitlst as HitList } from 'src/app/models/hitlist';
import {
  HitlistsService,
  HITLIST_TYPES,
} from 'src/app/services/hitlists.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  hitlists!: HitList[];
  hitlistTypes = HITLIST_TYPES;

  constructor(protected hitlistService: HitlistsService) {}

  ngOnInit(): void {
    this.fetchHitlists();
  }

  fetchHitlists(): void {
    this.hitlistsService.fetchAll().subscribe((hitLists: HitList[]) => this.hitlists = hitLists);
  }
}
