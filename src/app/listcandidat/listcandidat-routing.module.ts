import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcandidatComponent } from './listcandidat.component';

const routes: Routes = [{ path: '', component: ListcandidatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListcandidatRoutingModule { }
