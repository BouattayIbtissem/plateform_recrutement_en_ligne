import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyresumecvRoutingModule } from './myresumecv-routing.module';
import { MyresumecvComponent } from './myresumecv.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyresumecvComponent
  ],
  imports: [
    CommonModule,
    MyresumecvRoutingModule,
    ReactiveFormsModule
  ]
})
export class MyresumecvModule { }
