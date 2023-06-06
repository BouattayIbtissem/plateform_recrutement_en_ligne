import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeentreprisecandidatComponent } from './listeentreprisecandidat.component';

const routes: Routes = [{ path: '', component: ListeentreprisecandidatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeentreprisecandidatRoutingModule { }
