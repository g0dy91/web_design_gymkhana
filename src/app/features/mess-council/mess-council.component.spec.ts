import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessCouncilComponent } from './mess-council.component';

describe('MessCouncilComponent', () => {
  let component: MessCouncilComponent;
  let fixture: ComponentFixture<MessCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
