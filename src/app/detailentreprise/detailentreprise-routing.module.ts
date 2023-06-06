import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailentrepriseComponent } from './detailentreprise.component';

const routes: Routes = [{ path: '', component: DetailentrepriseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailentrepriseRoutingModule { }
