import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class ComponentModule { }
