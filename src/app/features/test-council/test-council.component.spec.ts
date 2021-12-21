import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCouncilComponent } from './test-council.component';

describe('TestCouncilComponent', () => {
  let component: TestCouncilComponent;
  let fixture: ComponentFixture<TestCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
