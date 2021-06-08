import { Component, OnInit } from '@angular/core';
import { HitList as HitList } from 'src/app/models/hitlist';
import {
  HitListsService,
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

  constructor(protected hitListService: HitListsService) {}

  ngOnInit(): void {
    this.fetchHitlists();
  }

  fetchHitlists(): void {
    this.hitListService.fetchAll().subscribe((hitLists: HitList[]) => this.hitlists = hitLists);
  }
}
