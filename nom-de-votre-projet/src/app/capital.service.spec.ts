import { TestBed } from '@angular/core/testing';

import { CapitalService } from './capital.service';

describe('CapitalService', () => {
  let service: CapitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
