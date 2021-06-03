import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HitlistComponent } from './pages/hitlist/hitlist.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'hitlist:hitlist', component: HitlistComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
