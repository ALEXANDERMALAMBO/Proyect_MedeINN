import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { EmpresasService } from '../../core/services/empresas/empresas.service';
import { ActionsDialogComponent } from '../../shared/actions-dialog/actions-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlacesService } from '../../core/services/places/places.service';
import { TypesIdentificationService } from '../../core/services/typesIdentification/types-identification.service';
import { CategoriasService } from '../../core/services/categorias/categorias.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  listEmpresas: any[];
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _empresasService: EmpresasService,
    private _placesService: PlacesService,
    private _typesIdentificationService: TypesIdentificationService,
    private _categoriasService: CategoriasService
  ) {
    this.listEmpresas = [];
  }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas() {
    this._spinner.show()
    this._empresasService.obtener().subscribe((data: any) => {
      this._spinner.hide()
      this.listEmpresas = data.data;
    })
  }

  ver(data: any) {
    var idAction = environment.idVer;
    this._router.navigate([`/dashboard/component/formulario-empresas/${idAction}/${data.id}`]);
  }
  editar(data: any) {
    var idAction = environment.idEditar;
    this._router.navigate([`/dashboard/component/formulario-empresas/${idAction}/${data.id}`]);
  }
  crear() {
    var idAction = environment.idCrear;
    this._router.navigate([`/dashboard/component/formulario-empresas/${idAction}/${0}`]);
  }
  eliminar(data: any) {
    let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
      data: {
        message: `Desea eliminar este registro`,
        content: ``,
        severity: 'warning',
      },
    });
    dialogConfirm.afterClosed().subscribe(r => {
      if (r === true) {
        this._spinner.show()
        this._empresasService.eliminar(data.id).subscribe(r => {
          this._spinner.hide()
          console.log(r);
          this.getEmpresas();
        })
      }
    })
  }

}
