import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Component, DebugElement } from '@angular/core'

import { DashboardHeroComponent } from './dashboard-hero.component';
import { Hero } from "../model/hero";
import { click } from "../../testing/index";

@Component({
  template: `
    <dashboard-hero [hero]="hero" (selected)="onSelected($event)"></dashboard-hero>`
})
class TestHostComponent {
  hero = new Hero(42, 'Test Name');
  selectedHero : Hero;

  onSelected(hero : Hero) {
    this.selectedHero = hero;
  }
}

describe('DashboardHeroComponent - TestHostComponent ', () => {

  // let comp : DashboardHeroComponent;
  let testHost : TestHostComponent;
  let fixture : ComponentFixture<TestHostComponent>;
  // let de : DebugElement;
  let heroEl : DebugElement;
  let expectedHero : Hero;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardHeroComponent,
        TestHostComponent
      ],
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    //    create TestHostComponent instead of DashboardHeroComponent
    // fixture = TestBed.createComponent(DashboardHeroComponent);
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    // comp = fi  xture.componentInstance;
    heroEl = fixture.debugElement.query(By.css('.hero'));

    fixture.detectChanges(); // trigger initial data binding
  });


  //tests
  it('should display hero name', () => {
    const expectedPipedName = testHost.hero.name.toUpperCase();
    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    click(heroEl);
    // selected hero should be the same data bound hero
    expect(testHost.selectedHero).toBe(testHost.hero);
  });

});

