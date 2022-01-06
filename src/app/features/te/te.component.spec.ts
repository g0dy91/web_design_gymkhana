import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeComponent } from './te.component';

describe('TeComponent', () => {
  let component: TeComponent;
  let fixture: ComponentFixture<TeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
