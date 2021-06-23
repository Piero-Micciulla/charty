import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ListDetailsComponent } from './pages/list-details/list-details.component';
import { PositionDetailsComponent } from './pages/position-details/position-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        ListDetailsComponent,
        PositionDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule,
        FormsModule,
        HttpClientModule,
        YouTubePlayerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
