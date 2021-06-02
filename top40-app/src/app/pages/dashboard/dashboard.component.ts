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

  constructor(private top40Service: HitlistsService) {}

  ngOnInit(): void {
    this.getTop40();
  }

  getTop40(): void {
    this.top40Service
      .getTop40()
      .subscribe((hitlists) => (this.hitlists = hitlists));
  }
}
