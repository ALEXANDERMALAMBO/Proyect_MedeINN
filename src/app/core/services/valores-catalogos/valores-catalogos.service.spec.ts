import { TestBed } from '@angular/core/testing';

import { ValoresCatalogosService } from './valores-catalogos.service';

describe('ValoresCatalogosService', () => {
  let service: ValoresCatalogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValoresCatalogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
