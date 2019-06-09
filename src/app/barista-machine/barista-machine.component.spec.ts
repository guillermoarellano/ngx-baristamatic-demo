import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaMachineComponent } from './barista-machine.component';

describe('BaristaMachineComponent', () => {
  let component: BaristaMachineComponent;
  let fixture: ComponentFixture<BaristaMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
