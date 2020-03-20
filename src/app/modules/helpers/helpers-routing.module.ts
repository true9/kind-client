import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from 'src/app/modules/helpers/components/list/list.component';
import { DeregistrationComponent } from 'src/app/modules/helpers/components/deregistration/deregistration.component';


const routes: Routes = [
  { path: 'helpers/remove', pathMatch: 'full', component: DeregistrationComponent },
  { path: 'helpers/:postcode', pathMatch: 'full', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpersRoutingModule { }
