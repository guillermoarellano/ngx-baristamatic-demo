import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse, flipInX, fadeInDown, fadeIn } from 'ng-animate';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { BaristaService, BaristaMenuDrink } from '../core/barista.service';
import { IngredientQuantity } from '../core/inventory';

const statusChange = trigger('statusChange', [
  transition('void => *', useAnimation(pulse)),
  transition('loop-state => start-state', []),
  transition('* => loop-state', useAnimation(pulse))
]);

const dispensingState = trigger('dispensingState', [
  transition(':enter', useAnimation(fadeIn, { params: { timing: 0.4, delay: 0 } }))
]);

@Component({
  selector: 'app-barista-machine',
  templateUrl: './barista-machine.component.html',
  styleUrls: ['./barista-machine.component.scss'],
  animations: [statusChange, dispensingState]
})
export class BaristaMachineComponent implements OnInit {
  menuDrinks: BaristaMenuDrink[];
  inventory: IngredientQuantity[];
  loading = false;
  faCoffee = faCoffee;
  state = 'start-state';

  constructor(private baristaService: BaristaService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.menuDrinks = this.baristaService.getDrinksMenu();
    this.inventory = this.baristaService.getInventory();
  }

  handleMakeDrink(recipeName: string) {
    this.baristaService.makeDrink(recipeName);
    this.toggleLoadingAnimation();
  }

  handleRestockInventory() {
    this.baristaService.restockInventory();
    this.refresh();
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.refresh();
    }, 3000);
  }

  onPulseAnimationDone(event: AnimationEvent) {
    setTimeout(() => {
      this.state === 'start-state' ? (this.state = 'loop-state') : (this.state = 'start-state');
    }, 0);
  }
}
