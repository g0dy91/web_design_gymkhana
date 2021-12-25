import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransperancyComponent } from './transperancy.component';

describe('TransperancyComponent', () => {
  let component: TransperancyComponent;
  let fixture: ComponentFixture<TransperancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransperancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransperancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
