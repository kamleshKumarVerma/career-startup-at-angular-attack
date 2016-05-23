import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthService {

    public authorisedUserChange: EventEmitter<any> = new EventEmitter();

  	constructor(private _cookieService: CookieService) {}

  	setAuthorisedUser(loggedInUser) {
        this._cookieService.putObject("USER_OBJECT", loggedInUser);
        this.authorisedUserChange.emit(loggedInUser);
    }

    getAuthorisedUser() {
        return this._cookieService.getObject("USER_OBJECT");
    }

    removeAuthorisedUser() {
        this._cookieService.remove("USER_OBJECT");
        this.authorisedUserChange.emit(null);
    }

}
