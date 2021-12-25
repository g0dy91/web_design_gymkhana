import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBearersComponent } from './office-bearers.component';

describe('OfficeBearersComponent', () => {
  let component: OfficeBearersComponent;
  let fixture: ComponentFixture<OfficeBearersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeBearersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeBearersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
