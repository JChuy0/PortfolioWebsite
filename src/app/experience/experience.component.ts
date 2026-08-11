import { Component, Input } from '@angular/core';
import { Job } from '../_models/Job';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css',
    standalone: false
})
export class ExperienceComponent {
  @Input() job = {} as Job;
}
