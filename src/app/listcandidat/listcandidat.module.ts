import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListcandidatRoutingModule } from './listcandidat-routing.module';
import { ListcandidatComponent } from './listcandidat.component';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { NgxPaginationModule } from 'ngx-pagination';
import { RecherchePipe } from '../pipes/recherche.pipe';
import { RechercheadressPipe } from '../pipes/rechercheadress.pipe';



@NgModule({
  declarations: [
    ListcandidatComponent,
    RecherchePipe,
    RechercheadressPipe

  ],
  imports: [
    CommonModule,
    ListcandidatRoutingModule,
    Ng5SliderModule,
    FormsModule,
    NgxPaginationModule
    
    
  ]
})
export class ListcandidatModule { }
