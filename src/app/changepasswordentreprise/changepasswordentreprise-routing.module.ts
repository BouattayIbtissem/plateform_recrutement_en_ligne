import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordentrepriseComponent } from './changepasswordentreprise.component';

const routes: Routes = [{ path: '', component: ChangepasswordentrepriseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangepasswordentrepriseRoutingModule { }
