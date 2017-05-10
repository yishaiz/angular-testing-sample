import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Inject, Injectable } from "@angular/core";


@Injectable()
export class UsersService {
  http : Http;

  /*constructor(public http : Http) {
    // this.http = http;
  }
*/
   constructor(@Inject(Http) http : Http) {
   this.http = http;
   }

  getUsers(since : number) : Observable<any> {
    var url : string = 'https://api.github.com/users';

    if (since) {
      url = 'https://api.github.com/users?since=' + since;
    }

    return this.http.get(url).map(response => response.json());
  }
}
