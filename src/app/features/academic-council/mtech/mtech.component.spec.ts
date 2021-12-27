import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtechComponent } from './mtech.component';

describe('MtechComponent', () => {
  let component: MtechComponent;
  let fixture: ComponentFixture<MtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
