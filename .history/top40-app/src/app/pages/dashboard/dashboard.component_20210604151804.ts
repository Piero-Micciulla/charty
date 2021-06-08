import { Component, OnInit } from '@angular/core';
import { Hitlist } from 'src/app/models/hitlist';
import { HitlistsService, HITLIST_TYPES } from 'src/app/services/hitlists.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  hitlists!: Hitlist[];
  position
  hitlistTypes = HITLIST_TYPES;

  constructor() {}

  ngOnInit(): void {}
}
