import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { KantaiIsCuteComponent } from './kantai-is-cute/kantai-is-cute.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    KantaiIsCuteComponent,
    LandingHomeComponent,
    LandingFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
