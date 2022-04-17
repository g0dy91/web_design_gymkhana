import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBearers2018Component } from './office-bearers2018.component';

describe('OfficeBearers2018Component', () => {
  let component: OfficeBearers2018Component;
  let fixture: ComponentFixture<OfficeBearers2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeBearers2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeBearers2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
