import { TestBed } from '@angular/core/testing';

import { SolicitudesEmpresasService } from './solicitudes-empresas.service';

describe('SolicitudesEmpresasService', () => {
  let service: SolicitudesEmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesEmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
