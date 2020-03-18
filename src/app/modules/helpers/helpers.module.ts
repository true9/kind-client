import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpersRoutingModule } from './helpers-routing.module';
import { FinderComponent } from './components/finder/finder.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FinderComponent],
  imports: [
    CommonModule,
    FormsModule,
    HelpersRoutingModule,
  ]
})
export class HelpersModule { }
