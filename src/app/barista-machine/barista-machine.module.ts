import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaristaMachineComponent } from './barista-machine.component';

@NgModule({
  declarations: [BaristaMachineComponent],
  exports: [BaristaMachineComponent],
  imports: [CommonModule]
})
export class BaristaMachineModule {}
