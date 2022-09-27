import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaBenzenoComponent } from './linea-benzeno.component';

describe('LineaBenzenoComponent', () => {
  let component: LineaBenzenoComponent;
  let fixture: ComponentFixture<LineaBenzenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaBenzenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaBenzenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
