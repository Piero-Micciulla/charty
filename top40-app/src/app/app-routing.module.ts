import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', component: DashboardComponent }]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
