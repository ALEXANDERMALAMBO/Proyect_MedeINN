import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.scss']
})
export class PoliticaPrivacidadComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  volver(){
    this._router.navigate(['agendamiento/consultar']);
  }
  continuar(){
    this._router.navigate(['agendamiento/inscripcion']);
  }
}
