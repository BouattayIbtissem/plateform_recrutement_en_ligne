import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CventrepriseRoutingModule } from './cventreprise-routing.module';
import { CventrepriseComponent } from './cventreprise.component';


@NgModule({
  declarations: [
    CventrepriseComponent
  ],
  imports: [
    CommonModule,
    CventrepriseRoutingModule
  ]
})
export class CventrepriseModule { }
