import { TestBed } from '@angular/core/testing';

import { FourService } from './four.service';

describe('FourService', () => {
  let service: FourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
