/*
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { DashboardHeroComponent } from './dashboard-hero.component';
import { Hero } from "../model/hero";
import { click } from "../../testing/index";

/!*
import { Router } from "@angular/router";
import { FakeHeroService } from "../model/testing/fake-hero.service";
import { HeroService } from "../model/hero.service";
*!/

/!*
 class RouterStub {
 navigateByUrl(url : string) {
 return url;
 }
 }
 *!/

describe('DashboardHeroComponent when tested directly', () => {

  let comp : DashboardHeroComponent;
  let fixture : ComponentFixture<DashboardHeroComponent>;
  let de : DebugElement;
  let heroEl : DebugElement;
  let expectedHero : Hero;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardHeroComponent
      ]
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    // fixture = TestBed.createComponent(DashboardHeroComponent);
    // comp = fixture.componentInstance;
    heroEl = fixture.debugElement.query(By.css('.hero')); // find hero element

    // pretend that it was wired to something that supplied a hero
    expectedHero = new Hero(42, 'Test Name');
    comp.hero = expectedHero;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);

    console.log("heroEl.nativeElement.textContent", heroEl.nativeElement.textContent);
    console.log("expectedPipedName", expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    let selectedHero : Hero;
    comp.selected.subscribe((hero : Hero) => selectedHero = hero);

    heroEl.triggerEventHandler('click', null);
    expect(selectedHero).toBe(expectedHero);
  });

  it('should raise selected event when clicked - using click helper', () => {
    let selectedHero : Hero;
    comp.selected.subscribe((hero : Hero) => selectedHero = hero);

    click(heroEl);   // triggerEventHandler helper
    expect(selectedHero).toBe(expectedHero);
  });


  //check the route - using stub

  /!*it('should tell ROUTER to navigate when hero clicked',
   inject([ Router ], (router : Router) => { // ...

   const spy = spyOn(router, 'navigateByUrl');

   //    heroClick(); // trigger click on first inner <div class="hero">
   heroEl.triggerEventHandler('click', null);

   // args passed to router.navigateByUrl()
   const navArgs = spy.calls.first().args[ 0 ];


   // expecting to navigate to id of the component's first hero
   // const id = comp.heroes[0].id;
   const id = comp.hero.id;
   expect(navArgs).toBe('/heroes/' + id,
   'should nav to HeroDetail for first hero');
   }));
   *!/
});


/!*
 it('should tell ROUTER to navigate when hero clicked',
 inject([Router], (router: Router) => { // ...

 const spy = spyOn(router, 'navigateByUrl');

 heroClick(); // trigger click on first inner <div class="hero">

 // args passed to router.navigateByUrl()
 const navArgs = spy.calls.first().args[0];

 // expecting to navigate to id of the component's first hero
 const id = comp.heroes[0].id;
 expect(navArgs).toBe('/heroes/' + id,
 'should nav to HeroDetail for first hero');
 }));

 *!/

*/
