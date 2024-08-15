import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})

export class ProjectCardComponent {
  @Input() project = {} as Project;

  constructor(private router: Router) {}

  navigateToDetails(num: number) {
    this.router.navigate(['/project-details', this.project.id]);
  }

}
