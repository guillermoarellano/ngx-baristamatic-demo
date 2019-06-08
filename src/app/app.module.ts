import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BaristaMachineModule } from './barista-machine/barista-machine.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, BaristaMachineModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
