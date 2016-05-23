import { Injectable } from '@angular/core';
import { CONSTANT } from '../../utility/constant';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SearchbyService {

    constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    getEducationCenters(educationType, educationName) {
        return this._http.get(CONSTANT.BASE_URL+educationType,{headers:this.getHeader()}).map( (res) => {
         return res.json();
        })
        .map((education_centers) => {
          let resultsData: Array<any> = [];
          education_centers.forEach((center: any) => {
              if(center.name.toUpperCase().indexOf(educationName.toUpperCase()) > -1 ) {
                  resultsData.push(center);
              }
          });
          return resultsData;
        });
    }

}
