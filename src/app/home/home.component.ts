import { Component } from '@angular/core';
import { Job } from '../_models/Job';
import { School } from '../_models/School';
import { Certificate } from '../_models/Certificate';
import { AboutComponent } from '../about/about.component';

import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { CertificationComponent } from '../certification/certification.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AboutComponent, ExperienceComponent, EducationComponent, CertificationComponent]
})
export class HomeComponent {

  Jobs: Job[] = [
    { id: 0, companyName: "JAM Digital Solutions", jobTitle: "Jr. Software Developer", date: "August 2023 - January 2024",
      accomplishments: [
        'Increased onboarding efficiency by 25% by writing documentation.',
        'Researched and implemented secure payment services, leading to enhanced financial security, improved customer trust, and reducing the risk of payment related issues.',
        'Built complex database models and effective queries, resulting in quicker data retrieval times.'
      ]
    },
    { id: 1, companyName: "ACE Project Space", jobTitle: "Full Stack Developer - Industry Client Project", date: "January 2022 - April 2022",
      accomplishments: [
        'Collaborated with a five-member team and a local business client to develop a web application that streamlined product catalog management.',
        'Developed an automated Node.js pipeline that retrieves data from a private API and synchronizes 5,000+ product records with MongoDB through scheduled daily updates.',
        'Built a React-based search interface with paginated results and detailed product information views.',
        'Participated in client meetings, requirements gathering, and project demonstrations.'
      ]
    },
  ]

  Schools: School[] = [
    { id: 0, schoolName: 'Red River College Polytechnic', courseName: 'Business Information Technology', date: 'Aug 2019 - Dec 2022',
      notes: ['Diploma in Business Information Technology, graduated on the honor roll with a 4.17 GPA.'],
      coursesTaken: 'Data Structures & Algorithms, Programming 1 (Java), Programming 2 & 3 (C#), Database Management Systems 1 & 2 (SQL Server), Web Development (HTML, CSS, JavaScript), Internet of Things with Python, AWS, and Blynk'
     },
  ]

  Certificates: Certificate[] = [
    { id: 0, name: 'Certified Cloud Practitioner', provider: 'Amazon Web Services (AWS)', date: 'July 2024' },
  ]

  resume = 'https://d3p6lighdfhv6a.cloudfront.net/resume/JasonChuyResume.pdf';

}
