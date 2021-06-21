import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ListDetailsComponent } from 'src/app/pages/list-details/list-details.component';
import { PositionDetailsComponent } from 'src/app/pages/position-details/position-details.component';

const routes: Routes = [
    { path: 'list/:id', component: HeaderComponent },
    { path: 'details/:id', component: ListDetailsComponent },
    { path: 'positionDetails/:id', component: PositionDetailsComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
