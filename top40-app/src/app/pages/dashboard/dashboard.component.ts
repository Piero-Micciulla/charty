import { Component, OnInit } from '@angular/core';
import { Hitlist } from 'src/app/models/hitlist';
import { HitlistsService } from 'src/app/services/hitlists.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  hitlists!: Hitlist[];
  opened!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
