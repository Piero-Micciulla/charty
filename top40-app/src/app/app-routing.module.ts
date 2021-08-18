import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import {HomeComponent} from './pages/home/home.component';
import {MusicComponent} from './pages/music/music.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {TipparadeComponent} from './pages/tipparade/tipparade.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'music', component: MusicComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tipparade', component: TipparadeComponent },
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
