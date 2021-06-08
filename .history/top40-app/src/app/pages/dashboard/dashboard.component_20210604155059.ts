import { Component, OnInit } from '@angular/core';
import { HitList as HitList } from 'src/app/models/hitlist';
import {
  HitlistsService as HitListsService,
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

  constructor(protected hitlistService: HitListsService) {}

  ngOnInit(): void {
    this.fetchHitlists();
  }

  fetchHitlists(): void {
    this.hitListsService.fetchAll().subscribe((hitLists: HitList[]) => this.hitlists = hitLists);
  }
}
