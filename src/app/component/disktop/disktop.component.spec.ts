import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisktopComponent } from './disktop.component';

describe('DisktopComponent', () => {
  let component: DisktopComponent;
  let fixture: ComponentFixture<DisktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
