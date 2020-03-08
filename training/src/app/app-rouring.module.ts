import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {MaiComponent} from "./main/mai.component";
import {GoalsComponent} from "./goals/goals.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {SkillsComponent} from "./skills/skills.component";

const router: Routes = [
  {
    path: 'main',
    component: MaiComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
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
