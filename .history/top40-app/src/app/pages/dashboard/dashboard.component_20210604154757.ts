import { Component, OnInit } from '@angular/core';
import { Hitlist } from 'src/app/models/hitlist';
import {
  HitlistsService,
  HITLIST_TYPES,
} from 'src/app/services/hitlists.service';
import Observable from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  hitlists!: Hitlist[];
  hitlistTypes = HITLIST_TYPES;

  constructor() {}

  ngOnInit(): void {
    this.fetchHitlists();
  }

  fetchHitlists(): Observable<Hitlist[]> {
    this.hitlists = this.hitlistsService.fetchAll();
  }
}