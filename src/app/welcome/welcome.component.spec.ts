import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from "../model/user.service";

describe('WelcomeComponent', () => {
  let component : WelcomeComponent;
  let fixture : ComponentFixture<WelcomeComponent>;

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // console.log(this.user)
    expect(component).toBeTruthy();
  });
});
