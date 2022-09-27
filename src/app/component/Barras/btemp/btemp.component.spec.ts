import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtempComponent } from './btemp.component';

describe('BtempComponent', () => {
  let component: BtempComponent;
  let fixture: ComponentFixture<BtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
