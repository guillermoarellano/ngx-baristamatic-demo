import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaristaMachineModule } from './barista-machine/barista-machine.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BaristaMachineModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
