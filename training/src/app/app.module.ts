import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {SharedModule} from "./shared/shared.module";
import { MaiComponent } from './main/mai.component';
import { GoalsComponent } from './goals/goals.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import {AppRoutingModule} from "./app-rouring.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MaiComponent,
    GoalsComponent,
    ResumeComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
