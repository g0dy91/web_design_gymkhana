import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilsComponent } from './councils.component';

describe('CouncilsComponent', () => {
  let component: CouncilsComponent;
  let fixture: ComponentFixture<CouncilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouncilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
