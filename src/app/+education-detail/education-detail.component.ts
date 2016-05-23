import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Control, Validators } from '@angular/common';
import { RouteParams } from '@angular/router-deprecated';
import { EducationDetailService } from './education-detail.service';
import { AuthService } from '../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-education-detail',
  templateUrl: 'education-detail.component.html',
  styleUrls: ['education-detail.component.css'],
  providers: [EducationDetailService]
})
export class EducationDetailComponent implements OnInit {

    reviewForm: ControlGroup;
    comment: Control;

    educationType: string;
    id: string;
    educationDetail: any;
    errorMessage: string;
    reviews: Array<any> = [];
    loggedInUser: any;

    constructor(params: RouteParams, private _educationDetailService: EducationDetailService, private _formBuilder: FormBuilder, private _authService: AuthService) {
        this._authService.authorisedUserChange.subscribe( (user) => {
           this.loggedInUser = user;
        });
        this.buildReviewForm();
        this.educationType = params.get('educationType');
        this.id = params.get('id');
        this.errorMessage = "";
    }

  	ngOnInit() {
        this.loggedInUser = this._authService.getAuthorisedUser();
      	this.getEducationDetail(this.educationType, this.id);
        this.getReviews(this.id);
        this.errorMessage = "";
  	}	

    buildReviewForm(): void {
      this.errorMessage = "";
      this.comment = new Control('', Validators.required);
      this.reviewForm = this._formBuilder.group({
        "comment": this.comment
      });
    }

    goingToWriteReview() {
      this.errorMessage = "";
    }

    getEducationDetail(educationType, id) {
        this.errorMessage = "";
        this._educationDetailService.getEducationDetail(educationType, id).subscribe( (education_detail) => {
          this.educationDetail = education_detail;
        },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime",
        () => console.log("api call finished")
        );
    }


    getReviews(id) {
        this.errorMessage = "";
        this._educationDetailService.getReviews(id).subscribe( (reviews) => {
          this.reviews = reviews.reverse();
        },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime",
        () => console.log("api call finished")
        );
    }

    postReview(reviewData) {
        this.errorMessage = "";
        reviewData.date = new Date();
        reviewData.center = this.id;
        if( this.loggedInUser === null || this.loggedInUser === undefined ) {
            reviewData.postedby = 'anonymous user';
        }else {
            reviewData.postedby = this.loggedInUser.name;
        }
        this._educationDetailService.postReview(JSON.stringify(reviewData)).subscribe( (reviews) => {
          this.errorMessage = "Your comment is successfully posted !";
          this.reviews.unshift(reviewData);
          this.buildReviewForm();
        },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime",
        () => console.log("api call finished")
        );
    }


}
