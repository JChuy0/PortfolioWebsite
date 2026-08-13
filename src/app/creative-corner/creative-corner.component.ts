import { Component, OnInit } from '@angular/core';
import { CloudFrontService } from '../_services/cloudfront.service';

import { DioramaCardComponent } from '../diorama-card/diorama-card.component';

@Component({
    selector: 'app-creative-corner',
    templateUrl: './creative-corner.component.html',
    styleUrl: './creative-corner.component.css',
    imports: [DioramaCardComponent]
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
