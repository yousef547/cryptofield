import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group28Component } from './group28.component';

describe('Group28Component', () => {
  let component: Group28Component;
  let fixture: ComponentFixture<Group28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Group28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Group28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
