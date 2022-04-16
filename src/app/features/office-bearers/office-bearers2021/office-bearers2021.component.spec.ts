import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBearers2021Component } from './office-bearers2021.component';

describe('OfficeBearers2021Component', () => {
  let component: OfficeBearers2021Component;
  let fixture: ComponentFixture<OfficeBearers2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeBearers2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeBearers2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
