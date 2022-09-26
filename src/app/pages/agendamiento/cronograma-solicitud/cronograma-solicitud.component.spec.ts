import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaSolicitudComponent } from './cronograma-solicitud.component';

describe('CronogramaSolicitudComponent', () => {
  let component: CronogramaSolicitudComponent;
  let fixture: ComponentFixture<CronogramaSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
