import { Injectable } from '@angular/core';
import {
  Recipe,
  CoffeeRecipe,
  DecafCoffeeRecipe,
  CaffeLatteRecipe,
  CaffeAmericanoRecipe,
  CaffeMochaRecipe,
  CappuccinoRecipe
} from './recipe';
import { Inventory } from './inventory';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root'
})
export class BaristaService {
  private recipes = new Map<string, Recipe>();

  constructor(inventory: Inventory) {
    this.addRecipe(new CoffeeRecipe(inventory));
    this.addRecipe(new DecafCoffeeRecipe(inventory));
    this.addRecipe(new CaffeLatteRecipe(inventory));
    this.addRecipe(new CaffeAmericanoRecipe(inventory));
    this.addRecipe(new CaffeMochaRecipe(inventory));
    this.addRecipe(new CappuccinoRecipe(inventory));
  }

  // Add a new recipe to the menu
  addRecipe(recipe: Recipe) {
    if (this.recipes.has(recipe.name)) {
      throw new Error(`The ${recipe.name} is already in the Menu.`);
    } else {
      this.recipes.set(recipe.name, recipe);
    }
  }

  display() {
    console.log('Menu:');
    let i = 0;

    this.recipes.forEach((recipeVal, recipeKey) => {
      console.log(`${i + 1}, ${recipeKey}, $${recipeVal.getCost()}, ${recipeVal.isInStock()}`);
      i++;
    });

    // for (Entry<String, Recipe> recipe : recipes.entrySet()) {
    // 	String price = String.format('%.2f', recipe.getValue().getCost());
    // 	System.out.println( (i + 1 ) + ',' + recipe.getKey() + ',' + '$' + price + ',' + recipe.getValue().isInStock() );
    // 	i++;
    // }
  }

  // Returns a new drink
  makeDrink(index: number): Drink {
    if (index < this.recipes.size) {
      const it: Iterator<Recipe> = this.recipes.values();
      for (let i = 0; i < index; i++) {
        it.next();
      }

      return ((it.next() as unknown) as Recipe).makeDrink();
    } else {
      throw new RangeError();
    }
  }
}
