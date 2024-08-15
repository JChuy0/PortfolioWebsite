import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})

export class ProjectDetailsComponent implements OnInit {

  @Input() projectid: string = '';
  project = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Project title here');
  }

  ngOnInit(): void {
    let id = +this.projectid;
    this.project = this.projectService.GetProjectById(id);
  }

}
