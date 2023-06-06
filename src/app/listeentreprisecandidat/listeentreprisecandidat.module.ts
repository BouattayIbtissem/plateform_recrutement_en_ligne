import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeentreprisecandidatRoutingModule } from './listeentreprisecandidat-routing.module';
import { ListeentreprisecandidatComponent } from './listeentreprisecandidat.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeentreprisecandidatComponent
  ],
  imports: [
    CommonModule,
    ListeentreprisecandidatRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ListeentreprisecandidatModule { }
