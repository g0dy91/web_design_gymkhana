import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCouncilComponent } from './general-council.component';

describe('GeneralCouncilComponent', () => {
  let component: GeneralCouncilComponent;
  let fixture: ComponentFixture<GeneralCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
