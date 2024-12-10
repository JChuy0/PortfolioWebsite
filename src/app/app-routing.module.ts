import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'about', title: 'Home', component: HomeComponent},
  {path: 'portfolio/:name', title: '', component: ProjectDetailsComponent},
  {path: 'portfolio', title: 'Portfolio', component: PortfolioComponent},
  {path: '404-page-not-found', title: 'Page not found', component: PageNotFoundComponent},
  {path: '**', title: 'Page not found', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
