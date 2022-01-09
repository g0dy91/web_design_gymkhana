import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Team19Component } from './team19.component';

describe('Team19Component', () => {
  let component: Team19Component;
  let fixture: ComponentFixture<Team19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Team19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Team19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
