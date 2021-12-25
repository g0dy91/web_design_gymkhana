import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCouncilComponent } from './academic-council.component';

describe('AcademicCouncilComponent', () => {
  let component: AcademicCouncilComponent;
  let fixture: ComponentFixture<AcademicCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
