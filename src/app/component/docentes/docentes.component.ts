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
import { DocentesService } from '../../core/services/docentes/docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {
  listDocentes: any[] = [];
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _docentesService: DocentesService,
    private _placesService: PlacesService,
    private _typesIdentificationService: TypesIdentificationService,
    private _categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.getDocentes();
  }

  getDocentes() {
    this._spinner.show()
    this._docentesService.obtener().subscribe((data: any) => {
      this._spinner.hide()
      this.listDocentes = data.data;
    })
  }

  ver(data: any) {
    var idAction = environment.idVer;
    this._router.navigate([`/dashboard/component/formulario-docentes/${idAction}/${data.id}`]);
  }
  editar(data: any) {
    var idAction = environment.idEditar;
    this._router.navigate([`/dashboard/component/formulario-docentes/${idAction}/${data.id}`]);
  }
  crear() {
    var idAction = environment.idCrear;
    this._router.navigate([`/dashboard/component/formulario-docentes/${idAction}/${0}`]);
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
        this._docentesService.eliminar(data.id).subscribe(r => {
          this._spinner.hide()
          console.log(r);
          this.getDocentes();
        })
      }
    })
  }
}
