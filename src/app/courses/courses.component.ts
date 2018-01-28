import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <button (click) = "onSave($event)">Save</button>
    `
})
export class CoursesComponent {
    onSave($event){
        $event.stopPropagation();
        console.log($event);
    }
}