import { Injectable } from '@angular/core';
import { CONSTANT } from '../../utility/constant';
import { Http, Headers } from '@angular/http';

@Injectable()
export class EducationDetailService {

    constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    getEducationDetail(educationType, id) {
        return this._http.get(CONSTANT.BASE_URL + educationType + "/" + id ,{headers: this.getHeader()}).map( res=> res.json() );
    }

    getReviews(id) {
    	return this._http.get(CONSTANT.BASE_URL+'reviews',{headers:this.getHeader()}).map( (res) => {
         return res.json();
        })
        .map((reviews) => {
          let resultsData: Array<any> = [];
          reviews.forEach((review: any) => {
              if(review.center === id) {
              	resultsData.push(review);
              }
          });
          return resultsData;
        });
    }

    postReview(reviewData) {
    	return this._http.post(CONSTANT.BASE_URL+'reviews',reviewData,{headers: this.getHeader()}).map( res=> res.json() );
    }

}
