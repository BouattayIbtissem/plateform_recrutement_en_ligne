import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListecandidatureRoutingModule } from './listecandidature-routing.module';
import { ListecandidatureComponent } from './listecandidature.component';


@NgModule({
  declarations: [
    ListecandidatureComponent
  ],
  imports: [
    CommonModule,
    ListecandidatureRoutingModule
  ]
})
export class ListecandidatureModule { }
