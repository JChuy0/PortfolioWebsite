import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  {path: 'about', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio/:projectid', component: ProjectDetailsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
