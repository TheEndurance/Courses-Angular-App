import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})
export class CoursesComponent {
    email:String = "me@example.com";

    onKeyUp(){
        console.log(this.email);
    }
}