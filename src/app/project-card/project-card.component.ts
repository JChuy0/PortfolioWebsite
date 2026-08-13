import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../_models/Project';
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})

export class ProjectCardComponent {
  @Input() project = {} as Project;

  constructor(private router: Router) {}

  navigateToDetails(name: string) {
    this.router.navigate(['/project-details', name]);
  }
}
