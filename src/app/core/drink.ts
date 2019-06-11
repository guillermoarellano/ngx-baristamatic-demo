export class Drink {
  constructor(private name: string) {
    this.name = name;
  }

  getDescription(): string {
    return this.name;
  }

  cost(): number {
    return 0;
  }
}
