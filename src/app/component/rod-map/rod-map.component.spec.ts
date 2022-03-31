import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodMapComponent } from './rod-map.component';

describe('RodMapComponent', () => {
  let component: RodMapComponent;
  let fixture: ComponentFixture<RodMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
