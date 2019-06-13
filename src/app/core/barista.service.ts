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
  recipesChanged$ = this.recipesChangedSource.asObservable();

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

  getDrinksMenu(): Observable<BaristaMenuDrink[]> {
    return this.recipesChanged$;
  }

  getInventory(): IngredientQuantity[] {
    this.drinksRecipesChanged();
    return this.inventory.getIngredientQuantities();
  }

  restockInventory() {
    this.inventory.restock();
    this.getInventory();
  }

  // Returns a new drink
  makeDrink(recipeName: string) {
    this.recipes.get(recipeName).makeDrink();
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

}
