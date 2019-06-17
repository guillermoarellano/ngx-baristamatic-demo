import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaDrinksMenuComponent } from './barista-drinks-menu.component';

describe('BaristaDrinksMenuComponent', () => {
  let component: BaristaDrinksMenuComponent;
  let fixture: ComponentFixture<BaristaDrinksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaDrinksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaDrinksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
