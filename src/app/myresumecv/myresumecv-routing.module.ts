import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyresumecvComponent } from './myresumecv.component';

const routes: Routes = [{ path: '', component: MyresumecvComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyresumecvRoutingModule { }
