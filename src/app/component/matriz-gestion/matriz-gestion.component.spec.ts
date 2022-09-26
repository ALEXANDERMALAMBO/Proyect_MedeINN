import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizGestionComponent } from './matriz-gestion.component';

describe('MatrizGestionComponent', () => {
  let component: MatrizGestionComponent;
  let fixture: ComponentFixture<MatrizGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
