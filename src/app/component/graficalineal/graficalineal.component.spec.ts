import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficalinealComponent } from './graficalineal.component';

describe('GraficalinealComponent', () => {
  let component: GraficalinealComponent;
  let fixture: ComponentFixture<GraficalinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficalinealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficalinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
