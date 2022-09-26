import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.scss']
})
export class JornadasComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  volver(){
    this._router.navigate(['agendamiento/terminos-y-condiciones']);
  }
  empresas(){
    this._router.navigate(['/agendamiento/consultar']);
  }

  solicitudPersonas(){
    this._router.navigate(['/agendamiento/solicitud-personas']);
  }
}
