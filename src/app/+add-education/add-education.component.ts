import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ControlGroup, FormBuilder, Control, Validators } from '@angular/common';
import { AddEducationService } from './add-education.service';
import { AuthService } from '../auth/auth.service';
import { HomeService } from '../+home/home.service';

@Component({
  moduleId: module.id,
  selector: 'app-add-education',
  templateUrl: 'add-education.component.html',
  styleUrls: ['add-education.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AddEducationService, HomeService]
})
export class AddEducationComponent implements OnInit {

    loggedInUser: any;
    step: number = 1;
    educationCenterObject: any;

    allCities: Array<string> = [];
    allEducationsType: Array<string> = [];
    allDegreeOrClass: Array<string> = [];
    selectedCity: string; 
    selectedEducationType: string;
    selectDegreeOrClass: string;

    addEducationCenterForm: ControlGroup;
    name: Control;
    desc: Control;
    fees_detail: Control;
    contact_no: Control;
    img_url: Control;
    saving: boolean;
    errorMessage: string;
    
	
  	constructor(private _formBuilder: FormBuilder, private _addEducationService: AddEducationService, private _authService: AuthService, private _homeService: HomeService) {
  		this._authService.authorisedUserChange.subscribe(user => this.loggedInUser = user);
      this.buildAddEducationCenterForm();
      this.saving = false;
      this.errorMessage = "";
      this.allCities = _homeService.getAllCities();
      this.allEducationsType = _homeService.getAllEducationsType();
      this.allDegreeOrClass = ['Select Degree/Class'];
      this.selectedCity = this.allCities[0];
      this.selectedEducationType = this.allEducationsType[0];
      this.selectDegreeOrClass = this.allDegreeOrClass[0];
  	}

  	ngOnInit() {
      this.errorMessage = "";
      this.loggedInUser = this._authService.getAuthorisedUser();
  	}

    buildAddEducationCenterForm(): void {
      this.errorMessage = "";
      this.name = new Control('', Validators.required);
      this.desc = new Control('', Validators.required);
      this.fees_detail = new Control('', Validators.required);
      this.contact_no = new Control('', Validators.required);
      this.img_url = new Control('');
      this.addEducationCenterForm = this._formBuilder.group({
        "name": this.name,
        "desc": this.desc,
        "fees_detail": this.fees_detail,
        "contact_no": this.contact_no,
        "img_url": this.img_url,
      });
    }

    onEducationTypeChange(newValue) {
      this.selectedEducationType = newValue;
      if( this.selectedEducationType === 'schools' || this.selectedEducationType === 'tuitions' ) {
          this.allDegreeOrClass = this._homeService.getAllClasses();
          this.selectDegreeOrClass = this.allDegreeOrClass[0];
      }else {
          this.allDegreeOrClass = this._homeService.getAllDegrees();
          this.selectDegreeOrClass = this.allDegreeOrClass[0];
      }
    }

  	goToNextStep() {
      this.errorMessage = "";
  		this.step++;
  	}

  	goToBack() {
      this.errorMessage = "";
  		this.step--;
  	}

    saveEducationCenter(formData) {
      if( this.selectedCity === 'Select City' || this.selectedEducationType === 'Select Type' || this.selectDegreeOrClass === 'Select Class' || this.selectDegreeOrClass === 'Select Degree' ) {
          this.errorMessage = "Please select required fields by Drop-down";
      }else {
          /* Setting up default images for education type if it is blank*/
          if(formData.img_url === '') {
              formData.img_url = 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-md.png';
          }
          this.educationCenterObject = formData;
          this.educationCenterObject.owner = this.loggedInUser.id;
          this.educationCenterObject.city = this.selectedCity;
          this.educationCenterObject.class_or_degree = this.selectDegreeOrClass;
          this.step++;
      }
    }

    confirmSave(openCompletedModal) {
      this.saving = true;
      this._addEducationService.addEducationCenter(this.selectedEducationType, JSON.stringify(this.educationCenterObject)).subscribe( (data) => {
          this.buildAddEducationCenterForm();
          this.saving = false;
          openCompletedModal.click();
      },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime ",
        () => console.log("api call finished")
      );
    }

}
