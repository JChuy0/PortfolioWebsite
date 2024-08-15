import { Component, Input } from '@angular/core';
import { School } from '../_models/School';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() school = {} as School;
}
