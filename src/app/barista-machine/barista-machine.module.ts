import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { BaristaMachineComponent } from './barista-machine.component';
import { BaristaDrinksMenuComponent } from './barista-drinks-menu/barista-drinks-menu.component';


@NgModule({
  declarations: [BaristaMachineComponent, BaristaDrinksMenuComponent],
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
