import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    FontAwesomeModule,
    FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
    faBars,
    faTimes,
    faAngleRight,
    faAngleLeft,
    faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HitlistComponent } from './pages/hitlist/hitlist.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { HitlistDetailsComponent } from './pages/hitlist-details/hitlist-details.component';
import { NetworkInterceptor } from './interceptors/network.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HitlistComponent,
        NavigationComponent,
        HitlistDetailsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: NetworkInterceptor,
        multi: true,
    }],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(faBars, faTimes, faAngleRight, faAngleLeft, faAngleUp);
    }
}
