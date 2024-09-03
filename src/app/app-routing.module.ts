import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', title: 'this is my home page', component: HomeComponent},
  {path: 'about', title: 'this is my home page', component: HomeComponent},
  {path: 'portfolio/:name', component: ProjectDetailsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '404-page-not-found', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
