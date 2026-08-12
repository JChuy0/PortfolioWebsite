import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';


@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
    imports: [NgFor, ProjectCardComponent]
})

export class PortfolioComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  data: any;
  error: string | null = null;

  async ngOnInit() {
    try {
      this.data = await this.apiService.getAllGitHubRepos();
    } catch (err) {
      this.error = 'Failed to load data.';
    }
  }

}