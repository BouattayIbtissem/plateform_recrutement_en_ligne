import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListcandidatnormalRoutingModule } from './listcandidatnormal-routing.module';
import { ListcandidatnormalComponent } from './listcandidatnormal.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListcandidatnormalComponent
  ],
  imports: [
    CommonModule,
    ListcandidatnormalRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ListcandidatnormalModule { }
