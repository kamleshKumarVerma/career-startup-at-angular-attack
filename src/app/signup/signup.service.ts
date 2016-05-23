import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONSTANT } from '../../utility/constant';

@Injectable()
export class SignupService {

    constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    userSignup(signupData) {
        return this._http.post(CONSTANT.BASE_URL+'users',signupData,{headers: this.getHeader()}).map( res=> res.json() );
    }


    isUserExistWhileSignup( userObject ) {
        return this._http.get(CONSTANT.BASE_URL+'users',{headers:this.getHeader()}).map( (res) => {
         return res.json();
        })
        .map((users) => {
          let isUserExist: boolean = false;
          users.forEach((user: any) => {
              if(user.email === userObject.email) {
                isUserExist = true;
                return;
              }
          });
          return isUserExist;
        });
    }

}