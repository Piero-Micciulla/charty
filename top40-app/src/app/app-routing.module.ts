import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HitlistDetailsComponent } from './pages/hitlist-details/hitlist-details.component';
import { HitlistComponent } from './pages/hitlist/hitlist.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'hitlist/:id', component: HitlistComponent },
  { path: 'details/:id', component: HitlistDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
