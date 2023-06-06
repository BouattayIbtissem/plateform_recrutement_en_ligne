import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeoffrecandidatRoutingModule } from './listeoffrecandidat-routing.module';
import { ListeoffrecandidatComponent } from './listeoffrecandidat.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RechercheoffrePipe } from '../pipes/rechercheoffre.pipe';



@NgModule({
  declarations: [
    ListeoffrecandidatComponent,
    RechercheoffrePipe
 
  ],
  imports: [
    CommonModule,
    ListeoffrecandidatRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ListeoffrecandidatModule { }
