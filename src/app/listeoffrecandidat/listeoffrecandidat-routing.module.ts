import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeoffrecandidatComponent } from './listeoffrecandidat.component';

const routes: Routes = [{ path: '', component: ListeoffrecandidatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeoffrecandidatRoutingModule { }
