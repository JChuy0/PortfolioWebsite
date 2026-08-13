import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrl: './project-details.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})

export class ProjectDetailsComponent implements OnInit {

  private sub: any;
  project_name: any;
  data: any;
  project_description: any;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router, private titleService: Title) {}

  async ngOnInit() {
    // grab project name from url params
    this.sub = this.route.params.subscribe(params => {
      this.project_name = params['name'];
      this.titleService.setTitle("Portfolio - " + this.project_name);
    })

    try {
      this.data = await this.apiService.getSingleGitHubRepo(this.project_name);

      if (Object.keys(this.data).length === 0) {
        this.router.navigate(['/404-page-not-found']);
      }

    } catch (err) {
      this.error = 'Failed to load data.';
    }
  }

}
