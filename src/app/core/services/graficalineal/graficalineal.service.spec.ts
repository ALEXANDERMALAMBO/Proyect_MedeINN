import { TestBed } from '@angular/core/testing';

import { GraficalinealService } from './graficalineal.service';

describe('GraficalinealService', () => {
  let service: GraficalinealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficalinealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
