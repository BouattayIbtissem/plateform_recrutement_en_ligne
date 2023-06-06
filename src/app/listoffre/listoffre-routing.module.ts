import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListoffreComponent } from './listoffre.component';

const routes: Routes = [{ path: '', component: ListoffreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListoffreRoutingModule { }
