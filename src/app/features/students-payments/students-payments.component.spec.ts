import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPaymentsComponent } from './students-payments.component';

describe('StudentsPaymentsComponent', () => {
  let component: StudentsPaymentsComponent;
  let fixture: ComponentFixture<StudentsPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
