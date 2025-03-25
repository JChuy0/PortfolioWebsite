import { Component, OnInit } from '@angular/core';
import { CloudFrontService } from '../_services/cloudfront.service';

@Component({
  selector: 'app-creative-corner',
  standalone: false,
  templateUrl: './creative-corner.component.html',
  styleUrl: './creative-corner.component.css'
})
export class CreativeCornerComponent implements OnInit {

  constructor(private cloudFrontService: CloudFrontService) {}

  data: any;
  error: string | null = null;
  reversedPhotos: any[] = [];
  
  async ngOnInit() {
    try {
      
      this.data = await this.cloudFrontService.getAllPhotosAndDioramas();
      this.reversedPhotos = [...this.data.photos].reverse();

    } catch (err) {
      this.error = 'Failed to load data.';
    }
  }
}
