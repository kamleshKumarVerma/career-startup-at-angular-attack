import { Component } from '@angular/core';
import { ControlGroup, FormBuilder, Control, Validators } from '@angular/common';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

    loginForm: ControlGroup;
    email: Control;
    password: Control;
    logging: Boolean;
    errorMessage: string;

  	constructor(private _formBuilder: FormBuilder, private _loginService: LoginService, private _authService: AuthService) {
        this.buildLoginForm();
      	this.logging = false;
        this.errorMessage = "";
  	}

  	buildLoginForm(): void {
      this.errorMessage = "";
      this.email = new Control('', Validators.required);
      this.password = new Control('', Validators.required);
      this.loginForm = this._formBuilder.group({
        "email": this.email ,
        "password": this.password
      });
    }

    userLogin(loginData, closeLoginModal): void {
      this.errorMessage = "";
      this.logging = true;
      this._loginService.userLogin().subscribe( (users) => {
          let result = this._loginService.isUserExistWhileLogin(users, loginData);
          if( result.isUserExist ) {
              this._authService.setAuthorisedUser(result.loggedInUser);
              closeLoginModal.click();
          } else {
          		this.errorMessage = "Invalid email or password";
          }
          this.logging = false;
      },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime" ,
        () => console.log("api call finished")
      );
    }

}
