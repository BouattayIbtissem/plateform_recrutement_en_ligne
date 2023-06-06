import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailcandidatRoutingModule } from './detailcandidat-routing.module';
import { DetailcandidatComponent } from './detailcandidat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailcandidatComponent
  ],
  imports: [
    CommonModule,
    DetailcandidatRoutingModule,
    FormsModule
  ]
})
export class DetailcandidatModule { }
