import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationComponent } from './certification/certification.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    FooterComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
