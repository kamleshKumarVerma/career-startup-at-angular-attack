import { Component, OnInit } from '@angular/core';
import { MyEducationCenterService } from './my-education-center.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { AuthService } from '../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-my-education-center',
  templateUrl: 'my-education-center.component.html',
  styleUrls: ['my-education-center.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MyEducationCenterService]
})
export class MyEducationCenterComponent implements OnInit {

    loggedInUser: any;
    allMyCenters : Array<any> = [];
    errorMessage: string;

  	constructor(private _authService: AuthService, private router: Router, private _myEducationCenterService: MyEducationCenterService) {
      this.errorMessage = "";
      this._authService.authorisedUserChange.subscribe( (user) => {
         if(user === null) {
            this.router.navigate(['Home']);
         }
      });
  	}

  	ngOnInit() {
      this.loggedInUser = this._authService.getAuthorisedUser();
      this.getEducationCenters('schools');
      this.getEducationCenters('colleges');
      this.getEducationCenters('coachings');
      this.getEducationCenters('tuitions');
      this.errorMessage = "";
  	}

    getEducationCenters(educationType) {
      this._myEducationCenterService.getEducationCenters(this.loggedInUser,educationType).subscribe( (education_centers) => {
      		this.allMyCenters = this.allMyCenters.concat(education_centers);
      },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime ",
        () => console.log("api call finished")
      );
    }

}
