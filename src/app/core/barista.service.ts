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
import { Inventory, IngredientQuantity } from './inventory';
import { Drink } from './drink';

export interface BaristaMenuDrink {
  id: number;
  name: string;
  cost: number;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BaristaService {
  private recipes = new Map<string, Recipe>();
  private inventory: Inventory;

  constructor(inventory: Inventory) {
    this.addRecipe(new CoffeeRecipe(inventory));
    this.addRecipe(new DecafCoffeeRecipe(inventory));
    this.addRecipe(new CaffeLatteRecipe(inventory));
    this.addRecipe(new CaffeAmericanoRecipe(inventory));
    this.addRecipe(new CaffeMochaRecipe(inventory));
    this.addRecipe(new CappuccinoRecipe(inventory));
    this.inventory = inventory;
  }

  // Add a new recipe to the menu
  addRecipe(recipe: Recipe) {
    if (this.recipes.has(recipe.name)) {
      throw new Error(`The ${recipe.name} is already in the Menu.`);
    } else {
      this.recipes.set(recipe.name, recipe);
    }
  }

  getDrinksMenu(): BaristaMenuDrink[] {
    const recipesArr = Array.from(this.recipes.values());

    return recipesArr.map(
      (recipeObj, index) => {
        const rObj: BaristaMenuDrink = {
          id: index + 1,
          name: recipeObj.name,
          cost: recipeObj.getCost(),
          inStock: recipeObj.isInStock()
        };
        return rObj;
      });
  }

  getInventory(): IngredientQuantity[] {
    return this.inventory.getIngredientQuantities();
  }

  restockInventory() {
    this.inventory.restock();
    this.getInventory();
  }
  // Returns a new drink
  makeDrink(recipeName: string): Drink {
    return this.recipes.get(recipeName).makeDrink();
  }
}
