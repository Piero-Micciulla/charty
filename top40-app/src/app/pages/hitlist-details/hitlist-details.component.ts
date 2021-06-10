import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hitlist-details',
  templateUrl: './hitlist-details.component.html',
  styleUrls: ['./hitlist-details.component.scss'],
})
export class HitlistDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('titleId');
  }
}
