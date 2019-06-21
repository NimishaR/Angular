import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

const routes: Routes = [{path:"countdown",component:CountdownParentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownRoutingModule { }
