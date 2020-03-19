import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CollectionsComponent} from "./main/collections.component";
import {WeatherComponent} from "./weather/weather.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {SkillsComponent} from "./skills/skills.component";

const router: Routes = [
  {
    path: 'main',
    component: CollectionsComponent
  },
  {
    path: 'goals',
    component: WeatherComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
