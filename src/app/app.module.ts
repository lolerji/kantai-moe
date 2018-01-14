import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { KantaiIsCuteComponent } from './kantai-is-cute/kantai-is-cute.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { KanmusuPortfolioComponent } from './kanmusu-portfolio/kanmusu-portfolio.component';
import { KanmusuService } from './kanmusu-service.service';
import { WantYouInTheArmyComponent } from './want-you-in-the-army/want-you-in-the-army.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    KantaiIsCuteComponent,
    LandingHomeComponent,
    LandingFooterComponent,
    KanmusuPortfolioComponent,
    WantYouInTheArmyComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.fireabase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [KanmusuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
