import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team21Component } from './team21.component';

describe('Team21Component', () => {
  let component: Team21Component;
  let fixture: ComponentFixture<Team21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Team21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
