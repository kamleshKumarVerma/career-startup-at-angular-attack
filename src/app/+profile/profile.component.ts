import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Control, Validators } from '@angular/common';
import { ProfileService } from './profile.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

	  isUpdateFormShow: Boolean;
	  user: any;
	  userProfileUpdateForm: ControlGroup;
	  name: Control;
	  email: Control;
	  password: Control;
	  about: Control;
	  img_url: Control;
	  cover_photo: Control;
	  location: Control;
    errorMessage: string;

	constructor(private _formBuilder: FormBuilder, private router: Router, private _profileService: ProfileService, private _authService: AuthService) {
      this.errorMessage = "";
      this._authService.authorisedUserChange.subscribe( (user) => {
         if(user === null) {
            this.router.navigate(['Home']);
         }
      });
      this.isUpdateFormShow = false;
  	}

	ngOnInit(): any {
      this.user = this._authService.getAuthorisedUser();
	    this.buildUserProfileUpdateForm();
      this.errorMessage = "";
	}

	buildUserProfileUpdateForm(): void {
    this.errorMessage = "";
    this.name = new Control(this.user.name, Validators.required);
    this.email = new Control(this.user.email, Validators.required);
    this.password = new Control(this.user.password, Validators.required);
    this.about = new Control(this.user.about, Validators.required);
    this.img_url = new Control(this.user.img_url, Validators.required);
    this.cover_photo = new Control(this.user.cover_photo, Validators.required);
    this.location = new Control(this.user.location, Validators.required);
    this.userProfileUpdateForm = this._formBuilder.group({
    	"name": this.name ,
      	"email": this.email ,
      	"password": this.password ,
      	"about": this.about ,
      	"img_url": this.img_url ,
      	"cover_photo": this.cover_photo ,
      	"location": this.location
    });
  }

  updateProfile(UpdatedFormData) {
  	UpdatedFormData.date = this.user.date;
  	this._profileService.updateProfile(this.user.id,JSON.stringify(UpdatedFormData)).subscribe((user) => {
      this.user = user;
      this.buildUserProfileUpdateForm();
      this._authService.setAuthorisedUser(this.user);
      this.isUpdateFormShow = false;
    },
      error => this.errorMessage = "Something went wrong !!! Please Try after sometime ",
      () => console.log("api call finished")
    );
  }

}
