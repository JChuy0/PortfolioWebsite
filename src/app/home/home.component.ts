import { Component } from '@angular/core';
import { Job } from '../_models/Job';
import { School } from '../_models/School';
import { Certificate } from '../_models/Certificate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Jobs: Job[] = [
    { id: 0, companyName: "JAM Digital Solutions", jobTitle: "Jr. Software Developer", date: "August 2023 - January 2024",
      accomplishments: [
        'Developed RESTful APIs for mobile apps using JavaScript, Node.js, Express, and PostgreSQL.',
        'Researched and implemented secure payment services, leading to enhanced financial security, improved customer trust, and reducing the risk of payment related issues.',
        'Built complex database models and effective queries, resulting in quicker data retrieval times.',
        'Applied the proper version control, prompting efficient workflow, and dedication to best practices in software development.'
      ]
    },
    { id: 1, companyName: "ACE Project Space", jobTitle: "Full Stack Developer Intern", date: "January 2022 - April 2022",
      accomplishments: [
        'Utilized React.js for front-end and Node.js for back-end development work, which involved retrieving data from an API, filtering and uploading the data to MongoDB, then displaying it in a user-friendly webpage where the user can edit the data.',
        'Increased speed of daily updates by over 20% using node.js, saving a lot of time and leading to high client satisfaction.',
        'Offer leadership support by applying agile methodologies to organize tasks using a Kanban board.',
      ]
    },
  ]

  Schools: School[] = [
    { id: 0, SchoolName: 'Red River College Polytechnic', courseName: 'Business Information Technology',
      notes: ['Diploma in Business Information Technology, graduated on the honor roll with a 4.17 GPA.'] },
  ]

  Certificates: Certificate[] = [
    { id: 0, name: 'Certified Cloud Practitioner', provider: 'Amazon Web Services (AWS)', date: 'July 2024' },
  ]

  resume = 'https://d3p6lighdfhv6a.cloudfront.net/resume/JasonChuyResume.pdf';

}
