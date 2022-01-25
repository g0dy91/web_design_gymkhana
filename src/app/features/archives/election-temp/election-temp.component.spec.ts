import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionTempComponent } from './election-temp.component';

describe('ElectionTempComponent', () => {
  let component: ElectionTempComponent;
  let fixture: ComponentFixture<ElectionTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
