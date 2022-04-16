import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBearers2019Component } from './office-bearers2019.component';

describe('OfficeBearers2019Component', () => {
  let component: OfficeBearers2019Component;
  let fixture: ComponentFixture<OfficeBearers2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeBearers2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeBearers2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
