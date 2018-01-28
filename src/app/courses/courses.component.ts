import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
    <h2>{{ title }}</h2>
    <img [src]="imageUrl"/>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})
export class CoursesComponent {
    title:String = "List of courses";
    courses:String[];
    imageUrl:String = "http://lorempixel.com/400/200";

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}