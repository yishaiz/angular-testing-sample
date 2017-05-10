import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpModule } from "@angular/http";
import { MockUsersService } from "../../../mocks/mock-users-service";

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      // providers: [ UsersService ]
      providers: [
        { provide: UsersService, useClass: MockUsersService }
      ]
    });
  });

  it('should ...', inject([ UsersService ], (service : UsersService) => {
    expect(service).toBeTruthy();

    service.getUsers(5).subscribe(
      (users) => {

        console.log('user:', users[ 0 ]);

        expect(users[ 0 ].login).toBe('defunkt');
      }
    );
  }));
});


