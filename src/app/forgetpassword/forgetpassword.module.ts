import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetpasswordRoutingModule } from './forgetpassword-routing.module';
import { ForgetpasswordComponent } from './forgetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    ForgetpasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForgetpasswordModule { }
