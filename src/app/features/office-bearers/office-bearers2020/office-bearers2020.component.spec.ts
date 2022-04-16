import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBearers2020Component } from './office-bearers2020.component';

describe('OfficeBearers2020Component', () => {
  let component: OfficeBearers2020Component;
  let fixture: ComponentFixture<OfficeBearers2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeBearers2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeBearers2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
