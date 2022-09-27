import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaHumedadComponent } from './linea-humedad.component';

describe('LineaHumedadComponent', () => {
  let component: LineaHumedadComponent;
  let fixture: ComponentFixture<LineaHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaHumedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
