import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissioncontrolComponent } from './missioncontrol/missioncontrol.component';

const routes: Routes = [{path:"mission",component:MissioncontrolComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }
