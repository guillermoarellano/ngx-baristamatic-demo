import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaristaMachineComponent } from './barista-machine.component';
// Nebular Design System
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbSpinnerModule
} from '@nebular/theme';
// Font Awesome 5.9.0
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [BaristaMachineComponent],
  exports: [BaristaMachineComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule,
    FontAwesomeModule
  ]
})
export class BaristaMachineModule {}
