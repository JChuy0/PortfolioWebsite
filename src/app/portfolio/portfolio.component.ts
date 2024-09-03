import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  data: any;
  error: string | null = null;

  async ngOnInit() {
    try {
      this.data = await this.apiService.getAllRepos();
    } catch (err) {
      this.error = 'Failed to load data.';
    }
  }

}