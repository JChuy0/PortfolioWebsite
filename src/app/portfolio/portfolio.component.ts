import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Project title here');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
