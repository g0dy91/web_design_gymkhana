import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team20Component } from './team20.component';

describe('Team20Component', () => {
  let component: Team20Component;
  let fixture: ComponentFixture<Team20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Team20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
