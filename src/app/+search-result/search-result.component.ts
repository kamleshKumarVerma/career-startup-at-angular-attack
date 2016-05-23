import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';
import { SearchResultService } from './search-result.service';

@Component({
  moduleId: module.id,
  selector: 'app-search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['search-result.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SearchResultService]
})
export class SearchResultComponent implements OnInit {

    city: string;
  	educationType: string;
    degreeOrClass: string;
    searchResult : Array<any> = [];
    isLoading: Boolean;
    errorMessage: string;

    constructor(params: RouteParams, private _searchResultService: SearchResultService) {
        this.isLoading = false;
        this.city = params.get('city');
        this.educationType = params.get('educationType');
        this.degreeOrClass = params.get('degreeOrClass');
        this.errorMessage = "";
    }

  	ngOnInit() {
      	this.getSearchResult(this.city, this.educationType, this.degreeOrClass);
        this.errorMessage = "";
  	}

    getSearchResult(city, educationType, degreeOrClass) {
      this.isLoading = true;
      this._searchResultService.getSearchResult(city, educationType, degreeOrClass).subscribe( (results) => {
          this.isLoading = false;
          this.searchResult = results;
      },
        error => this.errorMessage = "Something went wrong !!! Please Try after sometime..",
        () => console.log("api call finished")
      );
    }

}
