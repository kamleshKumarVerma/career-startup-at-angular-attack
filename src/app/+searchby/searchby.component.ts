import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';
import { SearchbyService } from './searchby.service';

@Component({
  moduleId: module.id,
  selector: 'app-searchby',
  templateUrl: 'searchby.component.html',
  styleUrls: ['searchby.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SearchbyService]
})
export class SearchbyComponent implements OnInit {

 	  educationType: string;
 	  educationName: string;
    educationCenters : Array<any> = [];
    isLoading: Boolean;
    errorMessage: string;

    constructor(params: RouteParams, private _searchbyService: SearchbyService) {
        this.isLoading = false;
        this.educationType = params.get('educationType');
        this.educationName = params.get('educationName');
        this.errorMessage = "";
    }

  	ngOnInit() {
        this.getEducationCenters(this.educationType, this.educationName);
        this.errorMessage = "";
  	}

    getEducationCenters(educationType, educationName) {
      this.isLoading = true;
      this._searchbyService.getEducationCenters(educationType, educationName).subscribe( (education_centers) => {
          this.isLoading = false;
          this.educationCenters = education_centers;
      },
        error =>this.errorMessage = "Something went wrong !!! Please Try after sometime" ,
        () => console.log("api call finished")
      );
    }

}
