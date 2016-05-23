import { Component } from '@angular/core';
import { ControlGroup, FormBuilder, Control, Validators } from '@angular/common';
import { SignupService } from './signup.service';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent {
	
    signupForm: ControlGroup;
    name: Control;
    email: Control;
    password: Control;
    registering: Boolean;
    errorMessage: string;

  	constructor(private _formBuilder: FormBuilder, private _signupService: SignupService) {
      	this.buildSignupForm();
        this.registering = false;
        this.errorMessage = "";
  	}

    buildSignupForm(): void {
      this.errorMessage = "";
      this.name = new Control('', Validators.required);
      this.email = new Control('', Validators.required);
      this.password = new Control('', Validators.required);
      this.signupForm = this._formBuilder.group({
        "name": this.name ,
        "email": this.email ,
        "password": this.password
      });
    }


    userSignup(signupData) {
      this.errorMessage = "";
      this.registering = true;
      this._signupService.isUserExistWhileSignup(signupData).subscribe( (isUserExist) => {
          if(isUserExist) {
          	this.errorMessage = "User Already Exist!";
          } else {
            signupData.date = new Date();
            this._signupService.userSignup(JSON.stringify(signupData)).subscribe( (user) => {
                this.buildSignupForm();
                this.errorMessage = "Successfully Signup! Please Login!";
            },
              error => this.errorMessage = "Something went wrong !!! Please Try after sometime" ,
              () => console.log("api call finished")
            );
          }
          this.registering = false;
      },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime" ,
        () => console.log("api call finished")
      );
    }

  	

}


