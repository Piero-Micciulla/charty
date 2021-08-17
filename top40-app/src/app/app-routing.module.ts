import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MusicComponent} from './pages/music/music.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'music', component: MusicComponent},
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
