import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import {HomeComponent} from './pages/home/home.component';
import {MusicComponent} from './pages/music/music.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {TipparadeComponent} from './pages/tipparade/tipparade.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { TipparadeDetailsComponent } from './components/tipparade-details/tipparade-details.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'music', component: MusicComponent},
  {path: 'music/:title_id', component: MusicDetailsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:title_id', component: AlbumDetailsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:title_id', component: MoviesDetailsComponent},
  {path: 'tipparade', component: TipparadeComponent },
  {path: 'tipparade/:title_id', component: TipparadeDetailsComponent},
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
