import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageacceuilComponent } from './pageacceuil.component';

const routes: Routes = [{ path: '', component: PageacceuilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageacceuilRoutingModule { }
