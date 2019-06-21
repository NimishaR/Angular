import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotertakerComponent } from './votertaker/votertaker.component';

const routes: Routes = [{path:'vote',component:VotertakerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }
