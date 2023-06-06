import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailcandidatComponent } from './detailcandidat.component';

const routes: Routes = [{ path: '', component: DetailcandidatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailcandidatRoutingModule { }
