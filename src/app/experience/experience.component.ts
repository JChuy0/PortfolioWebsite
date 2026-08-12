import { Component, Input } from '@angular/core';
import { Job } from '../_models/Job';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css',
    imports: [NgFor]
})
export class ExperienceComponent {
  @Input() job = {} as Job;
}
