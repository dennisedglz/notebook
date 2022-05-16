import { TestBed } from '@angular/core/testing';

import { PagesCounterService } from './pages-counter.service';

describe('PagesCounterService', () => {
  let service: PagesCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
