import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCouncilComponent } from './media-council.component';

describe('MediaCouncilComponent', () => {
  let component: MediaCouncilComponent;
  let fixture: ComponentFixture<MediaCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCouncilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
