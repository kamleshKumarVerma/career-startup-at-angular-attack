import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  	public menus: Array<any> = [{
        tag: 'schools',
        label: 'Searching for School',
        img_url: '../../assets/img/school.jpg'
    },
    {
        tag: 'colleges',
        label: 'Searching for College',
        img_url: '../../assets/img/college.jpg'
    },
    {
        tag: 'coachings',
        label: 'Searching for Coaching',
        img_url: '../../assets/img/coaching.jpg'
    },
    {
        tag: 'tuitions',
        label: 'Searching for Tuition',
        img_url: '../../assets/img/tuition.jpg'
    }];

	getMenus() {
		return this.menus;
	}

    getAllCities() {
        return [ 'Select City', 'Bangalore', 'Hydrabad', 'Mumbai', 'Delhi', 'Indore' ];
    }

    getAllEducationsType() {
        return [ 'Select Type', 'schools', 'tuitions', 'colleges', 'coachings' ];
    }

    getAllDegrees() {
        return [ 'Select Degree', 'BSc', 'BBA', 'BCA', 'BA', 'B. com' , 'MSc' , 'MBA', 'MCA', 'MA', 'M. com' , 'CA', 'CS' ];
    }

    getAllClasses() {
        return [ 'Select Class', 'primary', 'middle', 'high secondary', 'senior secondary' ];
    }

}
