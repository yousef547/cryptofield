import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekenSaleComponent } from './teken-sale.component';

describe('TekenSaleComponent', () => {
  let component: TekenSaleComponent;
  let fixture: ComponentFixture<TekenSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekenSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekenSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
