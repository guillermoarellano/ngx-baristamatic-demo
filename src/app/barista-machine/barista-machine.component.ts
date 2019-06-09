import { Component, OnInit } from '@angular/core';
import { BaristaService, BaristaMenuDrink } from '../core/barista.service';
import { IngredientQuantity } from '../core/inventory.ts';

@Component({
  selector: 'app-barista-machine',
  templateUrl: './barista-machine.component.html',
  styleUrls: ['./barista-machine.component.scss']
})
export class BaristaMachineComponent implements OnInit {
  menuDrinks: BaristaMenuDrink[];
  inventory: IngredientQuantity[];

  constructor(private baristaService: BaristaService) { }

  ngOnInit() {
    this.handleShowDrinksMenu();
  }

  handleShowDrinksMenu() {
    this.menuDrinks = this.baristaService.getDrinksMenu();
    this.inventory = this.baristaService.getInventory();
  }

  handleMakeDrink() {
    // this.baristaService.makeDrink();
  }

  handleRestockInventory() {
    this.baristaService.restockInventory();
  }

}
