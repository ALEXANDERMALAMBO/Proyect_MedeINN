import { TestBed } from '@angular/core/testing';

import { TypesIdentificationService } from './types-identification.service';

describe('TypesIdentificationService', () => {
  let service: TypesIdentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesIdentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
