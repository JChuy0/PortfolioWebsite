import { Component, Input } from '@angular/core';
import { School } from '../_models/School';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrl: './education.component.css',
    imports: [NgFor]
})
export class EducationComponent {
  @Input() school = {} as School;
}
