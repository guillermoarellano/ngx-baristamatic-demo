import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaristaMachineComponent } from './barista-machine.component';
// Nebular Design System
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbListModule,
  NbSpinnerModule
} from '@nebular/theme';

@NgModule({
  declarations: [BaristaMachineComponent],
  exports: [BaristaMachineComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule
  ]
})
export class BaristaMachineModule {}
