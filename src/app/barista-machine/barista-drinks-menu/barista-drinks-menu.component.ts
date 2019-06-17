import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaristaMenuDrink } from 'src/app/core/barista.service';

@Component({
  selector: 'app-barista-drinks-menu',
  templateUrl: './barista-drinks-menu.component.html',
  styleUrls: ['./barista-drinks-menu.component.scss']
})
export class BaristaDrinksMenuComponent implements OnInit {
  @Input() loading = false;
  @Input() menuDrinks: BaristaMenuDrink[];
  @Output() makeDrink = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleMakeDrink(recipeName: string) {
    this.makeDrink.emit(recipeName);
  }
}
