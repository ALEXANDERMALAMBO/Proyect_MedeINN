import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPersonasComponent } from './solicitudes-personas.component';

describe('SolicitudesPersonasComponent', () => {
  let component: SolicitudesPersonasComponent;
  let fixture: ComponentFixture<SolicitudesPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
