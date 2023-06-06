import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListecandidatureComponent } from './listecandidature.component';

const routes: Routes = [{ path: '', component: ListecandidatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListecandidatureRoutingModule { }
