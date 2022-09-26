import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInscritosComponent } from './formulario-inscritos.component';

describe('FormularioInscritosComponent', () => {
  let component: FormularioInscritosComponent;
  let fixture: ComponentFixture<FormularioInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInscritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
