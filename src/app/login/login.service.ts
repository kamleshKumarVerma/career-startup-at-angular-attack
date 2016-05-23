import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONSTANT } from '../../utility/constant';

@Injectable()
export class LoginService {

    constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    userLogin() {
        return this._http.get(CONSTANT.BASE_URL+'users',{headers: this.getHeader()}).map( res=> res.json() );
    }


    isUserExistWhileLogin(users, userObject) {
      let result = { isUserExist: false, loggedInUser: {} };
      users.forEach((user: any) => {
          if( user.email === userObject.email && user.password === userObject.password ) {
            result.isUserExist = true;
            result.loggedInUser = user;
            return;
          }
      });
      return result;
    }

}