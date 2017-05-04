import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../model';

@Component({
  selector: 'dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: [ './dashboard-hero.component.css' ]
})
export class DashboardHeroComponent {
  @Input() hero : Hero;
  @Output() selected = new EventEmitter<Hero>();

  // clickOnHero() {
  click() {
    this.selected.emit(this.hero);
  }
}


