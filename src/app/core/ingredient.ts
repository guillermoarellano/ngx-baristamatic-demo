import { Drink } from './drink';

export abstract class Ingredient extends Drink {
  private drink: Drink;
  private price: number;

  constructor(name: string, price: number) {
    super(name);
    this.price = price;
  }

  /**
   * Returns the name of the drink
   */
  getDescription(): string {
    return this.drink.getDescription();
  }

  /**
   * Returns the name of the ingredient
   */
  getName(): string {
    return super.getDescription();
  }

  /**
   * Add this ingredient to a drink
   */
  addTo(drink: Drink): Drink {
    this.drink = drink;
    return this.drink;
  }

  /**
   * If the ingredient is part of a drink returns the price of the whole drink.
   *
   * If it is not assigned to any drink, it will return the price of the ingredient.
   */

  cost(): number {
    if (this.drink != null) {
      return this.price + this.drink.cost();
    } else {
      return this.price;
    }
  }

  /**
   * Returns a copy of the ingredient
   */
  public abstract clone(): Ingredient;
}

export class Coffee extends Ingredient {
  constructor() {
    super('Coffee', 75);
  }

  clone(): Ingredient {
    return new Coffee();
  }
}

export class DecafCoffee extends Ingredient {
  constructor() {
    super('Decaf Coffee', 75);
  }

  clone(): Ingredient {
    return new DecafCoffee();
  }
}

export class Sugar extends Ingredient {
  constructor() {
    super('Sugar', 25);
  }
  clone(): Ingredient {
    return new Sugar();
  }
}

export class Cream extends Ingredient {
  constructor() {
    super('Cream', 25);
  }
  clone(): Ingredient {
    return new Cream();
  }
}

export class SteamedMilk extends Ingredient {
  constructor() {
    super('Steamed Milk', 35);
  }
  clone(): Ingredient {
    return new SteamedMilk();
  }
}

export class FoamedMilk extends Ingredient {
  constructor() {
    super('Foamed Milk', 35);
  }
  clone(): Ingredient {
    return new FoamedMilk();
  }
}

export class Espresso extends Ingredient {
  constructor() {
    super('Espresso', 110);
  }
  clone(): Ingredient {
    return new Espresso();
  }
}

export class Cocoa extends Ingredient {
  constructor() {
    super('Cocoa', 90);
  }
  clone(): Ingredient {
    return new Cocoa();
  }
}

export class WhippedCream extends Ingredient {
  constructor() {
    super('Whipped Cream', 100);
  }
  clone(): Ingredient {
    return new WhippedCream();
  }
}
