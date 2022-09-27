import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBenComponent } from './bben.component';

describe('BBenComponent', () => {
  let component: BBenComponent;
  let fixture: ComponentFixture<BBenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BBenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
