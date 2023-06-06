import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetpasswordRoutingModule } from './resetpassword-routing.module';
import { ResetpasswordComponent } from './resetpassword.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    ResetpasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class ResetpasswordModule { }
