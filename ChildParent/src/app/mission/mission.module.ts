import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionRoutingModule } from './mission-routing.module';
import { MissioncontrolComponent } from './missioncontrol/missioncontrol.component';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
  declarations: [MissioncontrolComponent, AstronautComponent],
  imports: [
    CommonModule,
    MissionRoutingModule
  ]
})
export class MissionModule { }
