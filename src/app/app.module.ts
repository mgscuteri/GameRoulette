import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SteamApiService } from '@services/steamAPI.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, WheelComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [SteamApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
