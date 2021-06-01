import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { Top40Service } from 'src/app/services/top40.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  songs!: Song[];

  constructor(private top40Service: Top40Service) {}

  ngOnInit(): void {
    this.getTop40();
  }

  getTop40(): void {
    this.top40Service.getTop40().subscribe((songs) => (this.songs = songs));
  }
}
