import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { HomeService } from './home.service';
import { CONSTANT } from '../../utility/constant';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  	appName: string;
    appTagLine: string;
    menus: Array<any>;
    searchEntityType: string;
    searchEntityName: string;
    allCities: Array<string> = [];
    allEducationsType: Array<string> = [];
    allDegreeOrClass: Array<string> = [];
    selectedCity: string; 
    selectedEducationType: string;
    selectDegreeOrClass: string;
    errorMessage: string;

    constructor(private _homeService: HomeService, private router: Router) {
        this.menus = _homeService.getMenus();
        this.allCities = _homeService.getAllCities();
        this.allEducationsType = _homeService.getAllEducationsType();
        this.allDegreeOrClass = ['Select Degree/Class'];
        this.selectedCity = this.allCities[0];
        this.selectedEducationType = this.allEducationsType[0];
        this.selectDegreeOrClass = this.allDegreeOrClass[0];
        this.errorMessage = "";
    }

    ngOnInit(): any {
        this.appName = CONSTANT.APP_NAME;
        this.appTagLine = CONSTANT.APP_TAGLINE;
        this.errorMessage = "";
    }

    setSearchEntityType(tag): void {
        this.searchEntityType = tag;
        this.searchEntityName = "";
        this.errorMessage = "";
    }

    onCityChange(newValue) {
      this.errorMessage = "";
      this.selectedCity = newValue;
    }

    onEducationTypeChange(newValue) {
      this.errorMessage = "";
      this.selectedEducationType = newValue;
      if( this.selectedEducationType === 'schools' || this.selectedEducationType === 'tuitions' ) {
          this.allDegreeOrClass = this._homeService.getAllClasses();
          this.selectDegreeOrClass = this.allDegreeOrClass[0];
      }else {
          this.allDegreeOrClass = this._homeService.getAllDegrees();
          this.selectDegreeOrClass = this.allDegreeOrClass[0];
      }
    }

    searchForAllEntity() {
        if( this.selectedCity === 'Select City' || this.selectedEducationType === 'Select Type' || this.selectDegreeOrClass === 'Select Class' || this.selectDegreeOrClass === 'Select Degree' ) {
            this.errorMessage = "Please select required fields";
        }else {
            this.router.navigate(['SearchResult', { city: this.selectedCity, educationType: this.selectedEducationType, degreeOrClass: this.selectDegreeOrClass } ]);
        }
    }



}
