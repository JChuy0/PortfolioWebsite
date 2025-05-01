import { Component, OnInit } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery'; // Import the correct Image type
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CloudFrontService } from '../_services/cloudfront.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalGalleryConfig, ModalGalleryRef, ModalGalleryService } from '@ks89/angular-modal-gallery';


@Component({
    selector: 'app-diorama-details',
    templateUrl: './diorama-details.component.html',
    styleUrl: './diorama-details.component.css',
    standalone: false,
    template: `
      <ks-carousel [id]="105" [images]="images" [config]="libConfig"></ks-carousel>
    `
})

export class DioramaDetailsComponent implements OnInit {

  private sub: any;
  diorama_name: any;
  data: any;
  sanitizedUrl: any;
  testFile: any;
  error: string | null = null;
  images: Image[] = new Array<Image>();
  
  // = [
  //   new Image(0, { img: 'https://d3p6lighdfhv6a.cloudfront.net/dioramas/warehouse/warehouse_001.jpg' }),
  //   new Image(1, { img: 'https://d3p6lighdfhv6a.cloudfront.net/dioramas/warehouse/warehouse_002.jpg' }),
  //   new Image(2, { img: 'https://d3p6lighdfhv6a.cloudfront.net/dioramas/warehouse/warehouse_003.jpg' }),
  //   new Image(3, { img: 'https://d3p6lighdfhv6a.cloudfront.net/dioramas/warehouse/warehouse_004.jpg' }),
  //   new Image(4, { img: 'https://d3p6lighdfhv6a.cloudfront.net/dioramas/warehouse/warehouse_005.jpg' }),
  // ];

  isModalOpen = false;


  constructor(private route: ActivatedRoute, private cloudFront: CloudFrontService, private router: Router,
    private titleService: Title, private sanitizer:DomSanitizer, private modalGalleryService: ModalGalleryService
  ) {}

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

      // console.log("my data: " + JSON.stringify(this.data.photos));

      if (Object.keys(this.data).length === 0) {
        this.router.navigate(['/404-page-not-found']);
      } else {
        this.convertImageToImageObject(this.data.photos);
      }

    } catch (err) {
      this.error = 'Failed to load data.';
    }
  }

  convertImageToImageObject(image: any) {
    for (let i = 0; i < image.length; i++) {
      const imageObject = new Image(i, { img: image[i] });
      this.images.push(imageObject);
    }
  }


  openModal(id: number, imageIndex: number) {
    const imageToShow: Image  = this.images[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: imageToShow,
    } as ModalGalleryConfig) as ModalGalleryRef;

    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

}
