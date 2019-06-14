import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BaristaService, BaristaMenuDrink } from '../core/barista.service';
import { IngredientQuantity } from '../core/inventory';

@Component({
  selector: 'app-barista-machine',
  templateUrl: './barista-machine.component.html',
  styleUrls: ['./barista-machine.component.scss']
})
export class BaristaMachineComponent implements OnInit {
  inventory$: Observable<IngredientQuantity[]>;
  menuDrinks$: Observable<BaristaMenuDrink[]>;
  loading = false;

  constructor(private baristaService: BaristaService) {}

  ngOnInit() {
    this.menuDrinks$ = this.baristaService.recipes$;
    this.inventory$ = this.baristaService.inventory$;
  }

  handleMakeDrink(recipeName: string) {
    this.baristaService.makeDrink(recipeName);
    this.toggleLoadingAnimation();
  }

  handleRestockInventory() {
    this.baristaService.restockInventory();
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
