import { TestBed } from '@angular/core/testing';

import { AuthHelpersService } from './auth-helpers.service';

describe('AuthHelpersService', () => {
  let service: AuthHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
