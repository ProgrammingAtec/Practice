import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {SharedModule} from "./shared/shared.module";
import { MaiComponent } from './main/mai.component';
import { WeatherComponent } from './weather/weather.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import {AppRoutingModule} from "./app-rouring.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MaiComponent,
    WeatherComponent,
    ResumeComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
