import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJornadasComponent } from './formulario-jornadas.component';

describe('FormularioJornadasComponent', () => {
  let component: FormularioJornadasComponent;
  let fixture: ComponentFixture<FormularioJornadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioJornadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioJornadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
