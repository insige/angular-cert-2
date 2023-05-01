import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamInfoPageComponent } from './pages/team-info-page/team-info-page.component';
import { TeamResultsPageComponent } from './pages/team-results-page/team-results-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: TeamInfoPageComponent },
  { path: 'results/:teamCode', component: TeamResultsPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
