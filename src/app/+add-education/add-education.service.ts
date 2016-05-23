import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONSTANT } from '../../utility/constant';

@Injectable()
export class AddEducationService {

	constructor(private _http: Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	addEducationCenter(educationType, data) {
		return this._http.post(CONSTANT.BASE_URL+educationType,data,{headers: this.getHeader()}).map( res=> res.json() );
	}

}

