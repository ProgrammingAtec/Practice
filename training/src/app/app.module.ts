import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { WeatherComponent } from './weather/weather.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRoutingModule } from './app-rouring.module';
import { AgGridModule } from 'ag-grid-angular';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './collections/collections.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WeatherComponent,
    ResumeComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    NoopAnimationsModule,
    MainModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
