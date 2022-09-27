import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BHumComponent } from './bhum.component';

describe('BHumComponent', () => {
  let component: BHumComponent;
  let fixture: ComponentFixture<BHumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BHumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
