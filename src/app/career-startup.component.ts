import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';
import { HomeComponent } from './+home';
import { AddEducationComponent } from './+add-education';
import { SearchbyComponent } from './+searchby';
import { EducationDetailComponent } from './+education-detail';
import { MyEducationCenterComponent } from './+my-education-center';
import { ProfileComponent } from './+profile';
import { SearchResultComponent } from './+search-result';

@Component({
  moduleId: module.id,
  selector: 'career-startup-app',
  templateUrl: 'career-startup.component.html',
  styleUrls: ['career-startup.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})
@RouteConfig([
  	{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/search-result/:city/:educationType/:degreeOrClass', name: 'SearchResult', component: SearchResultComponent },
  	{ path: '/add-education', name: 'AddEducation', component: AddEducationComponent },
    { path: '/searchby/:educationType/:educationName' , name: 'Searchby' , component: SearchbyComponent },
    { path: '/education-detail/:educationType/:id', name: 'EducationDetail', component: EducationDetailComponent },
    { path: '/my-education-centers', name: 'MyEducationCenter', component: MyEducationCenterComponent },
    { path: '/my-profile', name: 'Profile', component: ProfileComponent }
])
export class CareerStartupAppComponent {
  
}
