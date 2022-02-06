import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  constructor() { }

  showToggle: boolean = true;

  ngOnInit(): void {
  }

  onToggle() {
    this.showToggle = !this.showToggle;
  }
}
