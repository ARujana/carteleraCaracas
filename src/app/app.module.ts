import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    MovieCardComponent,
    HomeComponent,
    MovieDescriptionComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
