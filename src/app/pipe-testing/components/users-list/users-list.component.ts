import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
 import { GithubUser } from "../../entities/github-user";
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.login | capitalize }}</li>
    </ul>
  `,
  styles: [ `
    :host {
      font-family: 'Arial';
      display: flex;
      width: 100%;
      height: 100%;
    }
  ` ]
})
export class UsersListComponent implements OnInit {
  users : Array<GithubUser>;

  constructor(private usersService : UsersService) {

  }

  ngOnInit() {
    this.usersService
      .getUsers(1)
      .subscribe(
        users => this.users = users
      );
  }
}
