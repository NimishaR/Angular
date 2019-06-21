import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { VoteModule } from './vote/vote.module';
import { CountdownModule } from './countdown/countdown.module';
import { MissionModule } from './mission/mission.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    VoteModule,
    CountdownModule,
    MissionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
