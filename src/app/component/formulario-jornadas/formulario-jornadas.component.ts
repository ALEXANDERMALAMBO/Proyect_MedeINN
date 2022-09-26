import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JornadasService } from '../../core/services/jornadas/jornadas.service';
import { DocentesService } from '../../core/services/docentes/docentes.service';

@Component({
  selector: 'app-formulario-jornadas',
  templateUrl: './formulario-jornadas.component.html',
  styleUrls: ['./formulario-jornadas.component.scss']
})
export class FormularioJornadasComponent implements OnInit {
  JornadaForm: FormGroup;
  idAction: any;
  idJornada: any;
  listDocentes: any[] = [];
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _jornadasService: JornadasService,
    private _docentesService: DocentesService
  ) {
    this.JornadaForm = new FormGroup({
      nombre: new FormControl(''),
      codigo: new FormControl(''),
      tipo: new FormControl('PRESENCIAL'),
      tema: new FormControl(''),
      subtema: new FormControl(''),
      lugar: new FormControl(''),
      id_docente_principal: new FormControl(''),
      id_docente_suplente: new FormControl(''),
      fecha: new FormControl(''),
      hora_inicio: new FormControl(''),
      hora_fin: new FormControl(''),
      enabled: new FormControl(1),
    });
  }

  ngOnInit(): void {
    this.idAction = this._route.snapshot.params['idAction']
    this.idJornada = this._route.snapshot.params['idJornada']
    this.getDocentes();
    if (this.idAction != 1) {
      this.loadInfo()
    }
  }

  loadInfo() {
    this._jornadasService.obtenerById(this.idJornada).subscribe((data: any) => {
      if (data.id) {
        console.log(data);

        this.JornadaForm.controls['nombre'].setValue(data.nombre);
        this.JornadaForm.controls['tipo'].setValue(data.tipo);
        this.JornadaForm.controls['enabled'].setValue(data.enabled);
        this.JornadaForm.controls['codigo'].setValue(data.codigo);
        this.JornadaForm.controls['tema'].setValue(data.tema);
        this.JornadaForm.controls['subtema'].setValue(data.subtema);
        this.JornadaForm.controls['lugar'].setValue(data.lugar);
        this.JornadaForm.controls['id_docente_principal'].setValue(data.id_docente_principal);
        this.JornadaForm.controls['id_docente_suplente'].setValue(data.id_docente_suplente);
        this.JornadaForm.controls['fecha'].setValue(data.fecha);
        this.JornadaForm.controls['hora_inicio'].setValue(data.hora_inicio);
        this.JornadaForm.controls['hora_fin'].setValue(data.hora_fin);
      }
    })
  }

  getDocentes() {
    this._spinner.show()
    this._docentesService.obtener().subscribe((data: any) => {
      this._spinner.hide()
      this.listDocentes = data.data;
    })
  }
  guardar() {
    this._spinner.show()
    let data = {
      nombre: this.JornadaForm.value.nombre,
      tipo: this.JornadaForm.value.tipo,
      enabled: this.JornadaForm.value.enabled,
      codigo: this.JornadaForm.value.codigo,
      imagen: '',
      tema: this.JornadaForm.value.tema,
      subtema: this.JornadaForm.value.subtema,
      lugar: this.JornadaForm.value.lugar,
      id_docente_principal: this.JornadaForm.value.id_docente_principal,
      id_docente_suplente: this.JornadaForm.value.id_docente_suplente,
      fecha: this.JornadaForm.value.fecha,
      hora_inicio: this.JornadaForm.value.hora_inicio,
      hora_fin: this.JornadaForm.value.hora_fin
    }

    console.log(data);
    if (this.idAction == 1) {
      this._jornadasService.registrar(data).subscribe((resp: any) => {
        this._spinner.hide()
        console.log(resp);
        if (resp.id) {
          alert('Jornada creada con exito');
          this._router.navigate(['/dashboard/component/jornadas']);
        }
      })
    } else {
      this._jornadasService.actualizar(data, this.idJornada).subscribe((resp: any) => {
        this._spinner.hide()
        console.log(resp);
        if (resp.id) {
          // alert('Empresa creada con exito');
          this._router.navigate(['/dashboard/component/jornadas']);
        }
      })
    }
  }
}
