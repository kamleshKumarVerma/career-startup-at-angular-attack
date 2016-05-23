import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CONSTANT } from '../../utility/constant';

@Injectable()
export class SearchResultService {

	constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    getSearchResult(city, educationType, degreeOrClass) {
        return this._http.get(CONSTANT.BASE_URL+educationType,{headers:this.getHeader()}).map( (res) => {
         return res.json();
        })
        .map((education_centers) => {
          let resultsData: Array<any> = [];
          education_centers.forEach((center: any) => {
              if(center.city.toUpperCase() === city.toUpperCase() && center.class_or_degree.indexOf(degreeOrClass) > -1 ) {
              	resultsData.push(center);
              }
          });
          return resultsData;
        });
    }


}
