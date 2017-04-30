import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BannerComponent } from "./banner/banner.component";
// import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing.module";
import { Component } from "@angular/core";
import { RouterLinkStubDirective, RouterOutletStubComponent } from "../testing/router-stubs";
import { AboutComponent } from "./about/about.component";
import { TwainComponent } from "./shared/twain.component";
import { APP_BASE_HREF } from "@angular/common";


@Component({
  selector: 'app-welcome', template: ''
})
class WelcomeStubComponent {

}

@Component({
  selector: 'app-about', template: ''
})
class AboutStubComponent {

}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        WelcomeStubComponent,
        AboutComponent,
        TwainComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent

      ],
      imports: [
        AppRoutingModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works with tests !'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works with tests !');

    // expect(true).toEqual(false);
    expect(true).toEqual(true);

    // debugger;
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works with tests !');
  }));


  it('doSomething should should "abc"', async(() => {
    const expected = 'abc';
    expect(doSomething()).toEqual(expected);
  }));


  function doSomething() {
    return "abc";
  }
});
