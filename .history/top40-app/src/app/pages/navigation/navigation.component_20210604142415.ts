import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HITLIST_TYPES } from 'src/app/services/hitlists.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  hitlistTypes = HITLIST_TYPES;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      // do something with the query params
    });

    this.route.params.subscribe((routeParams) => {
      this.loadUser(routeParams.id);
    });
  }
}