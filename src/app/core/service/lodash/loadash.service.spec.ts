import { TestBed } from '@angular/core/testing';

import { LoadashService } from './loadash.service';

describe('LoadashService', () => {
  let service: LoadashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
