import { Component, OnInit } from '@angular/core';
import { BaristaService, BaristaMenuDrink } from '../core/barista.service';
import { IngredientQuantity } from '../core/inventory';

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
    this.refresh();
  }

  refresh() {
    this.menuDrinks = this.baristaService.getDrinksMenu();
    this.inventory = this.baristaService.getInventory();
  }

  handleMakeDrink(recipeName: string) {
    this.baristaService.makeDrink(recipeName);
    this.refresh();
  }

  handleRestockInventory() {
    this.baristaService.restockInventory();
    this.refresh();
  }

}
