import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamResultsCardComponent } from './components/team-results-card/team-results-card.component';
import { TeamInfoCardComponent } from './components/team-info-card/team-info-card.component';
import { TeamResultsPageComponent } from './pages/team-results-page/team-results-page.component';
import { TeamInfoPageComponent } from './pages/team-info-page/team-info-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSectionComponent } from './components/title-section/title-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamResultsCardComponent,
    TeamInfoCardComponent,
    TeamResultsPageComponent,
    TeamInfoPageComponent,
    ErrorPageComponent,
    TitleSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
