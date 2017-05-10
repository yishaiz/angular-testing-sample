import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By }                                from '@angular/platform-browser';
import { DebugElement }                      from '@angular/core';

import { UserService }      from '../model/user.service';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {

  let comp : WelcomeComponent;
  let fixture : ComponentFixture<WelcomeComponent>;

  let componentUserService : UserService; // the actually injected service
  let userService : UserService; // the TestBed injected service

  let de : DebugElement;  // the DebugElement with the welcome message
  let el : HTMLElement; // the DOM element with the welcome message

    let userServiceStub : {
      isLoggedIn : boolean;
      user : { name : string }
  };

  beforeEach(() => {
    // stub UserService for test purposes
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User' }
    };

    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      // providers:    [ UserService ]  // NO! Don't provide the real service!
      // Provide a test-double instead
      providers: [ { provide: UserService, useValue: userServiceStub } ]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    comp = fixture.componentInstance;

    // UserService actually injected into the component
    userService = fixture.debugElement.injector.get(UserService);
    componentUserService = userService;

    // UserService from the root injector
    userService = TestBed.get(UserService);

/*
    componentUserService = fixture.debugElement.injector.get(UserService);
    userService = fixture.debugElement.injector.get(UserService);
*/


    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });

//base tests

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);

    // Changing the stub object has no effect on the injected service
    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(true);
  });

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);
    expect(userService.isLoggedIn).toBe(true);

    // Changing the stub object has no effect on the injected service
    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(true);
    expect(userServiceStub.isLoggedIn).toBe(false);

    userService.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(false);

  });

//some tests

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    console.log('content', content);
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');
  });

  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });

  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });

  it('should inject the component\'s UserService instance',
    inject([ UserService ], (service : UserService) => {
      expect(service).toBe(componentUserService);
    })
  );

  it('TestBed and Component UserService should be the same', () => {
    expect(userService === componentUserService).toBe(true);
  });

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);

    // Changing the stub object has no effect on the injected service
    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(true);
  });
});


/*
 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 import { WelcomeComponent } from './welcome.component';
 import { UserService } from "../model/user.service";

 describe('WelcomeComponent - using a service - stub', () => {
 let component : WelcomeComponent;
 let fixture : ComponentFixture<WelcomeComponent>;
 let userService: UserService; // the TestBed injected service

 let userServiceStub : {
 isLoggedIn : boolean,
 user : {
 name : string
 }
 };

 beforeEach(async(() => {

 userServiceStub = {
 isLoggedIn: true,
 user: {
 name: 'Test user'
 }
 };

 TestBed.configureTestingModule({
 declarations: [ WelcomeComponent ],

 // providers:    [ UserService ]  // NO! Don't provide the real service!

 // Provide a test-double instead
 providers: [ { provide: UserService, useValue: userServiceStub } ]

 })
 .compileComponents();
 }));

 beforeEach(() => {

 fixture = TestBed.createComponent(WelcomeComponent);

 userService = fixture.debugElement.injector.get(UserService);
 // userService = TestBed.get(UserService);


 component = fixture.componentInstance;
 fixture.detectChanges();
 });

 it('should create', () => {
 // console.log(this.user)
 expect(component).toBeTruthy();
 });

 it('stub object and injected UserService should not be the same', () => {
 expect(userServiceStub === userService).toBe(false);

 // Changing the stub object has no effect on the injected service
 userServiceStub.isLoggedIn = false;
 expect(userService.isLoggedIn).toBe(true);
 });



 //some tests

 it('should welcome the user', () => {
 fixture.detectChanges();
 const content = el.textContent;
 expect(content).toContain('Welcome', '"Welcome ..."');
 expect(content).toContain('Test User', 'expected name');
 });

 it('should welcome "Bubba"', () => {
 userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
 fixture.detectChanges();
 expect(el.textContent).toContain('Bubba');
 });

 it('should request login if not logged in', () => {
 userService.isLoggedIn = false; // welcome message hasn't been shown yet
 fixture.detectChanges();
 const content = el.textContent;
 expect(content).not.toContain('Welcome', 'not welcomed');
 expect(content).toMatch(/log in/i, '"log in"');
 });



 });
 */
