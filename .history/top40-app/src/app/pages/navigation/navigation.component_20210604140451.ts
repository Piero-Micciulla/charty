import { Component, OnInit } from '@angular/core';
import { HITLIST_TYPES } from 'src/app/services/hitlists.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  hitlistTypes = HITLIST_TYPES;

  constructor() {}

  ngOnInit(): void {}
}
