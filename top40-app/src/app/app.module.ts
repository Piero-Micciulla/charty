import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TipparadeComponent } from './pages/tipparade/tipparade.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PlayerComponent } from './components/player/player.component';
import {SafePipe} from './utils/safe.pipe';
import {StripHtmlPipe} from './utils/stripHTML.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TipparadeComponent,
    AlbumDetailsComponent,
    MusicDetailsComponent,
    SearchbarComponent,
    PlayerComponent,
    SafePipe,
    StripHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
