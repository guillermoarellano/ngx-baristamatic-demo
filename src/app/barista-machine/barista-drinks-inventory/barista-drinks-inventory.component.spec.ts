import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaDrinksInventoryComponent } from './barista-drinks-inventory.component';

describe('BaristaDrinksInventoryComponent', () => {
  let component: BaristaDrinksInventoryComponent;
  let fixture: ComponentFixture<BaristaDrinksInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaDrinksInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaDrinksInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
