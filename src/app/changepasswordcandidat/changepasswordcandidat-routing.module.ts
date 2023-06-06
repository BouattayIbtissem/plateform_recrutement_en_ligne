import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordcandidatComponent } from './changepasswordcandidat.component';

const routes: Routes = [{ path: '', component: ChangepasswordcandidatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangepasswordcandidatRoutingModule { }
