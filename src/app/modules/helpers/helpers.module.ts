import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpersRoutingModule } from './helpers-routing.module';
import { FinderComponent } from './components/finder/finder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from 'src/app/modules/helpers/components/registration/registration.component';


@NgModule({
  declarations: [
    FinderComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HelpersRoutingModule,
  ],
  exports: [
    RegistrationComponent,
    FinderComponent
  ]
})
export class HelpersModule { }
