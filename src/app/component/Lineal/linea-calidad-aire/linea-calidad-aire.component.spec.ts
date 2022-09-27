import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaCalidadAireComponent } from './linea-calidad-aire.component';

describe('LineaCalidadAireComponent', () => {
  let component: LineaCalidadAireComponent;
  let fixture: ComponentFixture<LineaCalidadAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaCalidadAireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaCalidadAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
