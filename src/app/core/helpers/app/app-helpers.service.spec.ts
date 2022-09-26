import { TestBed } from '@angular/core/testing';

import { AppHelpersService } from './app-helpers.service';

describe('AppHelpersService', () => {
  let service: AppHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
