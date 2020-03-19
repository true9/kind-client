import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpersRoutingModule } from './helpers-routing.module';
import { FinderComponent } from './components/finder/finder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from 'src/app/modules/helpers/components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from 'src/app/modules/helpers/services/helper.service';


@NgModule({
  declarations: [
    FinderComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HelpersRoutingModule,
  ],
  exports: [
    RegistrationComponent,
    FinderComponent
  ],
  providers: [
    HelperService
  ]
})
export class HelpersModule { }
