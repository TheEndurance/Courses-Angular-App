import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        {{text | summary}}
    `
})
export class CoursesComponent {
    text = `Lorem Ipsum is simply dummy text of the printing and typeset Lorem Ipsum is simply dummy text of the printing and typeset
    Lorem Ipsum is simply dummy text of the printing and typeset
    Lorem Ipsum is simply dummy text of the printing and typeset
    Lorem Ipsum is simply dummy text of the printing and typeset
    Lorem Ipsum is simply dummy text of the printing and typeset
    Lorem Ipsum is simply dummy text of the printing and typeset`;
}