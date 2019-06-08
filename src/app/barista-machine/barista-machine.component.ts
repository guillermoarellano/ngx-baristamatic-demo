import { Component, OnInit } from '@angular/core';
import { BaristaService } from '../core/barista.service';

@Component({
  selector: 'app-barista-machine',
  templateUrl: './barista-machine.component.html',
  styleUrls: ['./barista-machine.component.scss']
})
export class BaristaMachineComponent implements OnInit {

  constructor(private baristaService: BaristaService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.baristaService.display();
  }
}
