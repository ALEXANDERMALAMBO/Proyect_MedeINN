import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneadorComponent } from './planeador.component';

describe('PlaneadorComponent', () => {
  let component: PlaneadorComponent;
  let fixture: ComponentFixture<PlaneadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
