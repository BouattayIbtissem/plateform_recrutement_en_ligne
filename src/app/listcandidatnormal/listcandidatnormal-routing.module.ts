import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcandidatnormalComponent } from './listcandidatnormal.component';

const routes: Routes = [{ path: '', component: ListcandidatnormalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListcandidatnormalRoutingModule { }
