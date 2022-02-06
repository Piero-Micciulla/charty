
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {TipparadeComponent} from './pages/tipparade/tipparade.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'track/:title_id', component: MusicDetailsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tipparade', component: TipparadeComponent },
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
