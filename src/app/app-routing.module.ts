import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from 'src/app/components/landing/landing.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { FaqsComponent } from 'src/app/components/faqs/faqs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'faqs', pathMatch: 'full', component: FaqsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
