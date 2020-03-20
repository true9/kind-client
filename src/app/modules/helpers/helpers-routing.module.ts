import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from 'src/app/modules/helpers/components/list/list.component';


const routes: Routes = [
  { path: 'helpers/:postcode', pathMatch: 'full', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpersRoutingModule { }
