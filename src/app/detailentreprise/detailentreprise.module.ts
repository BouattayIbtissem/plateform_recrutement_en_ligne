import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailentrepriseRoutingModule } from './detailentreprise-routing.module';
import { DetailentrepriseComponent } from './detailentreprise.component';


@NgModule({
  declarations: [
    DetailentrepriseComponent
  ],
  imports: [
    CommonModule,
    DetailentrepriseRoutingModule
  ]
})
export class DetailentrepriseModule { }
