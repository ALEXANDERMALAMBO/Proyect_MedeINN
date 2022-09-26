import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../core/services/spinner/spinner.service';
import { EmpresasService } from '../../../core/services/empresas/empresas.service';
import { ActionsDialogComponent } from '../../../shared/actions-dialog/actions-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-empresa',
  templateUrl: './consulta-empresa.component.html',
  styleUrls: ['./consulta-empresa.component.scss']
})
export class ConsultaEmpresaComponent implements OnInit {
  consultaForm: FormGroup;
  constructor(
    private _empresasService: EmpresasService,
    private fb: FormBuilder,
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router
  ) {
    this.consultaForm = this.fb.group({
      nit: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  consultar() {
    if (this.consultaForm.status == 'VALID') {
      this._spinner.show();
      var nit = this.consultaForm.controls['nit'].value;
      this._empresasService.obtenerByNit(nit).subscribe(result => {
        this._spinner.hide();
        console.log(result);
        if (!result) {
          console.log('no existe');
          let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
            data: {
              message: `No se encuentra registrado`,
              content: `¿Deseas registrarte?`,
              severity: 'error',
            },
          });
          dialogConfirm.afterClosed().subscribe(r => {
            if (r === true) {
              this._router.navigate(['agendamiento/politica-privacidad']);
            } else {
              console.log('cargar empresa');
            }
          })
        }else{
          alert('Tu empresa se encuentra registrada');
        }
      })
    } else {
      alert('Digite un NIT valido');
    }
  }
}
