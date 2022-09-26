import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrls: ['./terminos-y-condiciones.component.scss']
})
export class TerminosYCondicionesComponent implements OnInit {
  select: boolean = false;
  itemsSelect: number = 0;
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  selectItem(event: any) {
    this.itemsSelect = event.target.checked ? this.itemsSelect + 1 : this.itemsSelect - 1;
  }

  selectTodo(event: any) {
    // console.log(event);
    this.itemsSelect = event.target.checked ? 9 : 0;
    this.select = event.target.checked;
  }

  continuar() {
    if (this.itemsSelect == 9) {
      this._router.navigate(['agendamiento/jornadas']);
    } else {
      alert('Debe aceptar todos los terminos y condiciones');
    }
  }
}
