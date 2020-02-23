import {RouterModule, Router, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {MaiComponent} from "./main/mai.component";
import {GoalsComponent} from "./goals/goals.component";

const router: Routes = [
  {
    path: './',
    component: MaiComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [router]
})
export class AppRoutingModule {}
