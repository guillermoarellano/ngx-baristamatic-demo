import { Ingredient, DecafCoffee, Sugar, Cream, Cocoa, Espresso, FoamedMilk, SteamedMilk, WhippedCream, Coffee } from './ingredient';

export interface IngredientQuantity {
  ingredient: string;
  quantity: number;
}

export class Inventory {

  private quantities = new Map<string, number>();
  private ingredients = new Map<string, Ingredient>();

  constructor() {
    this.loadIngredient(new Coffee());
    this.loadIngredient(new DecafCoffee());
    this.loadIngredient(new Sugar());
    this.loadIngredient(new Cream());
    this.loadIngredient(new Cocoa());
    this.loadIngredient(new Espresso());
    this.loadIngredient(new FoamedMilk());
    this.loadIngredient(new SteamedMilk());
    this.loadIngredient(new WhippedCream());
  }

  getIngredientQuantities(): IngredientQuantity[] {
    return Array.from(this.quantities).map(item => {
      const rObj: IngredientQuantity = {
        ingredient: item[0],
        quantity: item[1]
      };
      return rObj;
    });
  }

  restock() {
    this.quantities.forEach((v, k) => this.quantities.set(k, 10));
  }

  // We can add more ingredients once the inventory has been created
  loadIngredient(ingredient: Ingredient) {
    if (this.ingredients.has(ingredient.getName())) {
      throw new Error(`${ingredient.getName()} already loaded.`);
    } else {
      this.ingredients.set(ingredient.getName(), ingredient);
      this.quantities.set(ingredient.getName(), 10);
    }
  }

  // Checks if there is the specified amount of ingredients in the inventory
  enoughOf(ingredient: string, qty: number): boolean {
    if (this.ingredients.has(ingredient)) {
      if (this.quantities.get(ingredient) >= qty) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error(`Ingredient ${ingredient} not present in Inventory.`);
    }
  }

  // Returns the specified ingredient and decreases its quantity in the inventory
  get(ingredient: string): Ingredient {
    if (this.enoughOf(ingredient, 1)) {
      this.quantities.set(ingredient, this.quantities.get(ingredient) - 1);
      return this.ingredients.get(ingredient).clone();
    } else {
      throw new Error(`Not enough ${ingredient}`);
    }
  }

  // Returns the cost of an ingredient in cents ($1.00 = 100)
  getCost(ingredient: string): number {
    if (this.ingredients.has(ingredient)) {
      return this.ingredients.get(ingredient).cost();
    } else {
      throw new Error(`${ingredient} not found to return cost.`);
    }
  }

}
