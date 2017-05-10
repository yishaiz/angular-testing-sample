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
import { UsersListComponent } from "./pipe-testing/components/users-list/users-list.component";
import { CapitalizePipe } from "./pipe-testing/pipes/capitalize.pipe";
import { UsersService } from "./pipe-testing/services/users.service";
import { MockUsersService } from "../mocks/mock-users-service";
import { Http, HttpModule } from "@angular/http";


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

  // let  usersServiceStub : {
  //   getUsers : boolean;
  //   user : { name : string }
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        WelcomeStubComponent,
        AboutComponent,
        TwainComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
        UsersListComponent,
        CapitalizePipe
      ],
      imports: [
        AppRoutingModule,
        HttpModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: UsersService, useClass: MockUsersService }
        // ,        Http
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


/*




 /// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

 import {it, describe, expect, beforeEachProviders, inject} from "angular2/testing";
 import {Response, XHRBackend, ResponseOptions, HTTP_PROVIDERS} from "angular2/http";
 import {MyService} from "./my-service";
 import {MockConnection, MockBackend} from "angular2/src/http/backends/mock_backend";
 import {provide} from "angular2/core";

 describe('MyService Tests', () => {
 beforeEachProviders(() => {
 return [
 HTTP_PROVIDERS,
 provide(XHRBackend, {useClass: MockBackend}),
 MyService
 ]
 });

 it('Should create a component MyList',
 inject([XHRBackend, MyService], (backend, service) => {
 backend.connections.subscribe(
 (connection:MockConnection) => {
 var options = new ResponseOptions({
 body: [
 {
 "login": "mojombo",
 "id": 1,
 "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
 "gravatar_id": "",
 "url": "https://api.github.com/users/mojombo",
 "html_url": "https://github.com/mojombo",
 "followers_url": "https://api.github.com/users/mojombo/followers",
 "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
 "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
 "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
 "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
 "organizations_url": "https://api.github.com/users/mojombo/orgs",
 "repos_url": "https://api.github.com/users/mojombo/repos",
 "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
 "received_events_url": "https://api.github.com/users/mojombo/received_events",
 "type": "User",
 "site_admin": false
 }
 ]
 });

 var response = new Response(options);

 connection.mockRespond(response);
 }
 );

 service.getUsers().subscribe(
 (users) => {
 expect(users[0].login).toBe('mojombo');
 }
 );

 service.getUsers(5).subscribe(
 (users) => {
 expect(users[0].login).toBe('mojombo');
 }
 );
 })
 );
 });
 */
