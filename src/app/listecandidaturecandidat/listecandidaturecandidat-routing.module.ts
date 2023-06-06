import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListecandidaturecandidatComponent } from './listecandidaturecandidat.component';

const routes: Routes = [{ path: '', component: ListecandidaturecandidatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListecandidaturecandidatRoutingModule { }
