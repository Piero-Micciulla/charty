import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TipparadeComponent } from './pages/tipparade/tipparade.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { TipparadeDetailsComponent } from './components/tipparade-details/tipparade-details.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MusicComponent,
    AlbumsComponent,
    MoviesComponent,
    TipparadeComponent,
    AlbumDetailsComponent,
    MoviesDetailsComponent,
    MusicDetailsComponent,
    TipparadeDetailsComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
