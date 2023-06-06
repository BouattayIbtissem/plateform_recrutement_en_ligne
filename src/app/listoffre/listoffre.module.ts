import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListoffreRoutingModule } from './listoffre-routing.module';
import { ListoffreComponent } from './listoffre.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListoffreComponent
  ],
  imports: [
    CommonModule,
    ListoffreRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ListoffreModule { }
