import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, fadeIn } from 'ng-animate';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { IngredientQuantity } from 'src/app/core/inventory';

// Animations
const statusChange = trigger('statusChange', [
  transition('void => *', useAnimation(pulse)),
  transition('loop-state => start-state', []),
  transition('* => loop-state', useAnimation(pulse))
]);

const dispensingState = trigger('dispensingState', [
  transition(':enter', useAnimation(fadeIn, { params: { timing: 0.4, delay: 0 } }))
]);

@Component({
  selector: 'app-barista-drinks-inventory',
  templateUrl: './barista-drinks-inventory.component.html',
  styleUrls: ['./barista-drinks-inventory.component.scss'],
  animations: [statusChange, dispensingState]
})
export class BaristaDrinksInventoryComponent implements OnInit {
  @Input() loading = false;
  @Input() inventory: IngredientQuantity[];
  @Output() restockInventory = new EventEmitter();
  faCoffee = faCoffee;
  state = 'start-state';

  constructor() {}

  ngOnInit() {}

  handleRestockInventory() {
    this.restockInventory.emit();
  }

  onPulseAnimationDone(event: AnimationEvent) {
    setTimeout(() => {
      this.state === 'start-state' ? (this.state = 'loop-state') : (this.state = 'start-state');
    }, 0);
  }
}
