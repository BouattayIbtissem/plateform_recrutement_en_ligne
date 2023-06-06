import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageacceuilRoutingModule } from './pageacceuil-routing.module';
import { PageacceuilComponent } from './pageacceuil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageacceuilComponent
  ],
  imports: [
    CommonModule,
    PageacceuilRoutingModule,
    FormsModule
 
  ]
})
export class PageacceuilModule { }
