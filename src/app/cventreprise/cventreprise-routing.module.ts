import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CventrepriseComponent } from './cventreprise.component';

const routes: Routes = [{ path: '', component: CventrepriseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CventrepriseRoutingModule { }
