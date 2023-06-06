import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { OffreComponent } from './offre.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffreComponent
  ],
  imports: [
    CommonModule,
    OffreRoutingModule,
    ReactiveFormsModule
  ]
})
export class OffreModule { }
