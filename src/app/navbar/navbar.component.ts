import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from '../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, LoginComponent, SignupComponent]
})
export class NavbarComponent implements OnInit {

	@Input() brand: string;
	loggedInUser: any;

  	constructor(private _authService: AuthService) {
  		this._authService.authorisedUserChange.subscribe(user => this.loggedInUser = user);
  	}

  	ngOnInit() {
  		this.loggedInUser = this._authService.getAuthorisedUser();
  	}

  	logout() {
  		this._authService.removeAuthorisedUser();
  	}

}
