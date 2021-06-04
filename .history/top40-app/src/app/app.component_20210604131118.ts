import { Component } from '@angular/core';

import { HITLIST_TYPES } from './services/hitlists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Top 40';
  opened!: boolean;

  hitlistTypes = HITLIST_TYPES;
}
