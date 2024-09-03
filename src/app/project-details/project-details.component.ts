import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { marked } from 'marked';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})

export class ProjectDetailsComponent implements OnInit {

  private sub: any;
  project_name: any;
  data: any;
  marked_readme: any;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router,) {}

  async ngOnInit() {
    // grab project name from url params
    this.sub = this.route.params.subscribe(params => {
      this.project_name = params['name'];
    })

    try {
      this.data = await this.apiService.getSingleRepo(this.project_name);

      // converts markdown syntax to html
      this.marked_readme = await marked(this.data?.project_readme);

      if (Object.keys(this.data).length === 0) {
        this.router.navigate(['/404-page-not-found']);
      }

    } catch (err) {
      this.error = 'Failed to load data.';
    }
  }

}
