import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreativeCornerComponent } from './creative-corner/creative-corner.component';
import { DioramaDetailsComponent } from './diorama-details/diorama-details.component';

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'about', title: 'Home', component: HomeComponent},
  {path: 'portfolio/:name', title: '', component: ProjectDetailsComponent},
  {path: 'portfolio', title: 'Portfolio', component: PortfolioComponent},
  {path: 'creative-corner/diorama/:name', title: '', component: DioramaDetailsComponent},
  {path: 'creative-corner', title: 'Creative Corner', component: CreativeCornerComponent},
  {path: '404-page-not-found', title: 'Page not found', component: PageNotFoundComponent},
  {path: '**', title: 'Page not found', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
