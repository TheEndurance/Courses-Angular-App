import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        {{course.title | uppercase}} <br/>
        {{course.rating | number:'1.2-2'}} <br/>
        {{course.students | number}} <br/>
        {{course.price | currency:'CAD':true:'3.2-2'}} <br/>
        {{course.releaseDate | date:'shortDate'}} <br/>
    `
})
export class CoursesComponent {
    course = {
        title:"The complete Angular Course",
        rating: 4.932327,
        students:3033123,
        price:190,
        releaseDate:new Date(2016,3,5)
    }
}