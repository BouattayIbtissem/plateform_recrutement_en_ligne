import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { LayoutComponent } from '../component/layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng5SliderModule } from 'ng5-slider';






@NgModule({
  declarations: [
    HomeComponent,
       HeaderComponent,
    FooterComponent,
    LayoutComponent,



  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    Ng5SliderModule,
    FormsModule,
    NgxPaginationModule
  
    
  
   

  ] 
})
export class HomeModule { }

