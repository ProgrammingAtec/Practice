import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-rouring.module';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './collections/collections.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { WeatherComponent } from './weather/weather.component';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WeatherComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    NoopAnimationsModule,
    MainModule,
    ResumeModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [],
  exports: [
    SharedModule
  ]
})
export class AppModule {
}
