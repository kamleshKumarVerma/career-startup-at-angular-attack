import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {CONSTANT} from '../../utility/constant';

@Injectable()
export class ProfileService {

	constructor(private _http: Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	updateProfile(userId, userObject) {
		return this._http.put(CONSTANT.BASE_URL+'users/'+userId,userObject,{headers: this.getHeader()}).map( res=> res.json() );
	}

}

