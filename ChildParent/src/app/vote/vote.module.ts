import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoterComponent } from './voter/voter.component';
import { VotertakerComponent } from './votertaker/votertaker.component';

@NgModule({
  declarations: [VoterComponent, VotertakerComponent],
  imports: [
    CommonModule,
    VoteRoutingModule
  ]
})
export class VoteModule { }
