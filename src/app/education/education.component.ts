import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { School } from '../_models/School';


@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrl: './education.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class EducationComponent {
  @Input() school = {} as School;
}
