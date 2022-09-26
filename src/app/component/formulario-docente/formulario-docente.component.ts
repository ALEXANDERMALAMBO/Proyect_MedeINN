import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DocentesService } from '../../core/services/docentes/docentes.service';

@Component({
  selector: 'app-formulario-docente',
  templateUrl: './formulario-docente.component.html',
  styleUrls: ['./formulario-docente.component.scss']
})
export class FormularioDocenteComponent implements OnInit {
  DocenteForm: FormGroup;
  idAction: any;
  idDocente: any;
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _docentesService: DocentesService
  ) {
    this.DocenteForm = new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      identificacion: new FormControl(''),
      telefono: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.idAction = this._route.snapshot.params['idAction']
    this.idDocente = this._route.snapshot.params['idDocente']
    if (this.idAction != 1) {
      this.loadInfo()
    }
  }

  loadInfo() {
    this._docentesService.obtenerById(this.idDocente).subscribe((data: any) => {
      if (data.id) {
        console.log(data);

        this.DocenteForm.controls['nombre'].setValue(data.nombre);
        this.DocenteForm.controls['email'].setValue(data.email);
        this.DocenteForm.controls['identificacion'].setValue(data.identificacion);
        this.DocenteForm.controls['telefono'].setValue(data.telefono);
      }
    })
  }

  guardar() {
    this._spinner.show()
    let data = {
      nombre: this.DocenteForm.value.nombre,
      identificacion: this.DocenteForm.value.identificacion,
      email: this.DocenteForm.value.email,
      telefono: this.DocenteForm.value.telefono,
      enabled: 1
    }

    console.log(data);
    if (this.idAction == 1) {
      this._docentesService.registrar(data).subscribe((resp: any) => {
        this._spinner.hide()
        console.log(resp);
        if (resp.id) {
          alert('Docente creado con exito');
          this._router.navigate(['/dashboard/component/docentes']);
        }
      })
    } else {
      this._docentesService.actualizar(data, this.idDocente).subscribe((resp: any) => {
        this._spinner.hide()
        console.log(resp);
        if (resp.id) {
          // alert('Empresa creada con exito');
          this._router.navigate(['/dashboard/component/docentes']);
        }
      })
    }

  }
}
