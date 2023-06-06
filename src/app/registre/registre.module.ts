import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistreRoutingModule } from './registre-routing.module';
import { RegistreComponent } from './registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    RegistreComponent,
  
  ],
  imports: [
    CommonModule,
    RegistreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class RegistreModule { }
