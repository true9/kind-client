import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinderComponent } from 'src/app/modules/helpers/components/finder/finder.component';


const routes: Routes = [
  { path: 'search', pathMatch: 'full', component: FinderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpersRoutingModule { }
