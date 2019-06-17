import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
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

  private recipesChangedSource = new BehaviorSubject<BaristaMenuDrink[]>(null);
  recipes$ = this.recipesChangedSource.asObservable();
  private inventoryChangedSource = new BehaviorSubject<IngredientQuantity[]>(null);
  inventory$ = this.inventoryChangedSource.asObservable();

  constructor(inventory: Inventory) {
    this.addRecipe(new CoffeeRecipe(inventory));
    this.addRecipe(new DecafCoffeeRecipe(inventory));
    this.addRecipe(new CaffeLatteRecipe(inventory));
    this.addRecipe(new CaffeAmericanoRecipe(inventory));
    this.addRecipe(new CaffeMochaRecipe(inventory));
    this.addRecipe(new CappuccinoRecipe(inventory));
    this.inventory = inventory;
    this.updateDrinksAndInventory();
  }

  // Add a new recipe to the menu
  addRecipe(recipe: Recipe) {
    if (this.recipes.has(recipe.name)) {
      throw new Error(`The ${recipe.name} is already in the Menu.`);
    } else {
      this.recipes.set(recipe.name, recipe);
    }
  }

  getDrinksMenu(): Observable<BaristaMenuDrink[]> {
    return this.recipes$;
  }

  getInventory(): Observable<IngredientQuantity[]> {
    return this.inventory$;
  }

  restockInventory() {
    this.inventory.restock();
    this.updateDrinksAndInventory();
  }

  // Returns a new drink
  makeDrink(recipeName: string) {
    this.recipes.get(recipeName).makeDrink();
    this.updateDrinksAndInventory();
  }

  private updateDrinksAndInventory() {
    this.drinksRecipesChanged();
    this.drinksInventoryChanged();
  }

  private drinksRecipesChanged() {
    const recipesArr = Array.from(this.recipes.values());
    const newRecipesArray = recipesArr.map((recipeObj, index) => {
      const rObj: BaristaMenuDrink = {
        id: index + 1,
        name: recipeObj.name,
        cost: recipeObj.getCost(),
        inStock: recipeObj.isInStock()
      };
      return rObj;
    });

    this.recipesChangedSource.next(newRecipesArray);
  }

  private drinksInventoryChanged() {
    this.inventoryChangedSource.next(this.inventory.getIngredientQuantities());
  }

}
