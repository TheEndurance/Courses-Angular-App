import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <input #templateVariable (keyup.enter)="onKeyUp(templateVariable.value)"/>
    `
})
export class CoursesComponent {
    onKeyUp(valueFromInput){
        console.log(valueFromInput);
    }
}