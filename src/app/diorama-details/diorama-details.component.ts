import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CloudFrontService } from '../_services/cloudfront.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-diorama-details',
  templateUrl: './diorama-details.component.html',
  styleUrl: './diorama-details.component.css'
})

export class DioramaDetailsComponent implements OnInit {

  private sub: any;
  diorama_name: any;
  data: any;
  sanitizedUrl: any;
  testFile: any;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private cloudFront: CloudFrontService, private router: Router, private titleService: Title, private sanitizer:DomSanitizer) {}

  async ngOnInit() {
    /*
      I passed the diorama name through route params to keep the address bar clean.
      And if someone entered the url manually, it will display the correct data.
    */
    this.sub = this.route.params.subscribe(params => {
      this.diorama_name = params['name'];
      this.titleService.setTitle("Diorama - " + this.diorama_name);
    })

    try {
      this.data = await this.cloudFront.getFilesForSingleDiorama(this.diorama_name);
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.writeup);

      if (Object.keys(this.data).length === 0) {
        this.router.navigate(['/404-page-not-found']);
      }

    } catch (err) {
      this.error = 'Failed to load data.';
    }
  }
}
