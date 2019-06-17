import { Inventory } from './inventory';
import { Drink } from './drink';

export abstract class Recipe {
  name: string;

  protected inventory: Inventory;

  private recipe = new Map<string, number>();
  private cost = 0;

  constructor(name: string, inventory: Inventory) {
    this.inventory = inventory;
    this.name = name;
    this.setRecipe();
    this.cost = this.drinkCost() / 100;
  }

  getCost(): number {
    return this.cost;
  }

  addIngredient(ingredient: string, qty: number) {
    this.recipe.set(ingredient, qty);
  }

  // Every new recipe has to specify the ingredients that will be using
  public abstract setRecipe(): void;

  dispenseCoffee() {
    // console.log(`Dispensing: ${this.name}`);
  }

  outOfStock() {
    // console.log(`Out of Stock: ${this.name}`);
  }

  // Returns the drink specified in the recipe or null if there are no enough ingredients in the inventory
  makeDrink(): Drink {
    let drink: Drink;
    if (this.isInStock()) {
      drink = new Drink(name);

      this.recipe.forEach((ingredientVal, ingredientKey) => {
        for (let i = 0; i < ingredientVal; i++) {
          drink = this.inventory.get(ingredientKey).addTo(drink);
        }
      });

      this.dispenseCoffee();

      return drink;
    } else {
      this.outOfStock();

      return null;
    }
  }

  // Check if the required ingredients are available to make the drink
  isInStock(): boolean {
    let result = true;

    this.recipe.forEach((ingredientVal, ingredientKey) => {
      if (!this.inventory.enoughOf(ingredientKey, ingredientVal)) {
        result = false;
      }
    });

    return result;
  }

  // Computes the cost of the drink specified by the recipe
  drinkCost(): number {
    let cost = 0;

    this.recipe.forEach((ingredientVal, ingredientKey) => {
      for (let i = 0; i < ingredientVal; i++) {
        cost += this.inventory.getCost(ingredientKey);
      }
    });

    return cost;
  }
}

export class CoffeeRecipe extends Recipe {
  constructor(inventory: Inventory) {
    super('Coffee', inventory);
  }

  setRecipe() {
    this.addIngredient('Coffee', 3);
    this.addIngredient('Sugar', 1);
    this.addIngredient('Cream', 1);
  }
}

export class DecafCoffeeRecipe extends Recipe {
  constructor(inventory: Inventory) {
    super('Decaf Coffee', inventory);
  }

  setRecipe() {
    this.addIngredient('Decaf Coffee', 3);
    this.addIngredient('Sugar', 1);
    this.addIngredient('Cream', 1);
  }
}

export class CaffeLatteRecipe extends Recipe {
  constructor(inventory: Inventory) {
    super('Caffe Latte', inventory);
  }

  setRecipe() {
    this.addIngredient('Espresso', 2);
    this.addIngredient('Steamed Milk', 1);
  }
}

export class CaffeAmericanoRecipe extends Recipe {
  constructor(inventory: Inventory) {
    super('Caffe Americano', inventory);
  }

  setRecipe() {
    this.addIngredient('Espresso', 3);
  }
}

export class CaffeMochaRecipe extends Recipe {
  constructor(inventory: Inventory) {
    super('Caffe Mocha', inventory);
  }

  setRecipe() {
    this.addIngredient('Espresso', 1);
    this.addIngredient('Cocoa', 1);
    this.addIngredient('Steamed Milk', 1);
    this.addIngredient('Whipped Cream', 1);
  }
}

export class CappuccinoRecipe extends Recipe {
  constructor(inventory: Inventory) {
    super('Cappuccino', inventory);
  }

  setRecipe() {
    this.addIngredient('Espresso', 2);
    this.addIngredient('Steamed Milk', 1);
    this.addIngredient('Foamed Milk', 1);
  }
}
