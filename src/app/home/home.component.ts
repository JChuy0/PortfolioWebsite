import { Component } from '@angular/core';
import { Job } from '../_models/Job';
import { Tag } from '../_models/Tag';
import { School } from '../_models/School';
import { Certificate } from '../_models/Certificate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Jobs: Job[] = [
    { id: 0, companyName: "companyname1", jobTitle: "mytitle", date: "Jan 2023 - April 2024", accomplishments: ['task1', 'task2', 'task3'], tags: [Tag.ANGULAR, Tag.TYPESCRIPT] },
    { id: 1, companyName: "companyname2", jobTitle: "mytitle", date: "April 2021 - Nov 2022", accomplishments: ['task1'], tags: [Tag.ANGULAR, Tag.TYPESCRIPT] },
    { id: 2, companyName: "companyname3", jobTitle: "mytitle", date: "Feb 2015 - April 2021", accomplishments: ['task1', 'task2'], tags: [Tag.ANGULAR, Tag.TYPESCRIPT] },
  ]

  Schools: School[] = [
    { id: 0, SchoolName: 'Red River College Polytechnic', courseName: 'Business Information Technology', date: 'September 2020 - December 2022', notes: ['Diploma in Business Information Technology, graduating on the honor roll with a 4.17 GPA.'] },
  ]

  Certificates: Certificate[] = [
    { id: 0, name: 'Certified Cloud Practitioner', provider: 'Amazon Web Services (AWS)', date: 'July 2024' },
  ]

  resume = 'https://drive.google.com/file/d/1bwJIP9C4xQU6iA6ksVubfN2k9bCDVxBY/view?usp=sharing'

}
