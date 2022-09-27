import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAireComponent } from './baire.component';

describe('BAireComponent', () => {
  let component: BAireComponent;
  let fixture: ComponentFixture<BAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BAireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
