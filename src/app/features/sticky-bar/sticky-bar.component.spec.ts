import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyBarComponent } from './sticky-bar.component';

describe('StickyBarComponent', () => {
  let component: StickyBarComponent;
  let fixture: ComponentFixture<StickyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
