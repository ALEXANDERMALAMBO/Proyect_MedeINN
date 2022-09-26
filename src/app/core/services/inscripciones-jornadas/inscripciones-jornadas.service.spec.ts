import { TestBed } from '@angular/core/testing';

import { InscripcionesJornadasService } from './inscripciones-jornadas.service';

describe('InscripcionesJornadasService', () => {
  let service: InscripcionesJornadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripcionesJornadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
