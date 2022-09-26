import { Component, OnInit } from '@angular/core';
import { InscripcionesJornadasService } from '../../core/services/inscripciones-jornadas/inscripciones-jornadas.service';
import { SpinnerService } from '../../core/services/spinner/spinner.service';

@Component({
  selector: 'app-formulario-inscritos',
  templateUrl: './formulario-inscritos.component.html',
  styleUrls: ['./formulario-inscritos.component.scss']
})
export class FormularioInscritosComponent implements OnInit {
  listParticipantes: any[] = [];
  constructor(
    private _spinner: SpinnerService,
    private _inscripcionesJornadasService: InscripcionesJornadasService
  ) { }

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes() {
    this._spinner.show()
    this._inscripcionesJornadasService.obtener().subscribe((data: any) => {
      this._spinner.hide()
      this.listParticipantes = data.data;
    })
  }
}
