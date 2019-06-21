import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownRoutingModule } from './countdown-routing.module';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';

@NgModule({
  declarations: [CountdownParentComponent, CountdownChildComponent],
  imports: [
    CommonModule,
    CountdownRoutingModule
  ]
})
export class CountdownModule { }
