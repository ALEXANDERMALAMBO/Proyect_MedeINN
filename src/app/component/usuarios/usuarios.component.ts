import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../../core/services/places/places.service';
import { TypesIdentificationService } from '../../core/services/typesIdentification/types-identification.service';
import { CategoriasService } from '../../core/services/categorias/categorias.service';
import { environment } from '../../../environments/environment';
import { UsersService } from '../../core/services/users/users.service';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { EmpresasService } from '../../core/services/empresas/empresas.service';
import { ActionsDialogComponent } from '../../shared/actions-dialog/actions-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: any[] = [];
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _usersService: UsersService,
    private _placesService: PlacesService,
    private _typesIdentificationService: TypesIdentificationService,
    private _categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this._spinner.show()
    this._usersService.listarUsuarios().subscribe((data: any) => {
      this._spinner.hide()
      this.listUsuarios = data.data;
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
    this._router.navigate([`/dashboard/component/formulario-usuarios/${idAction}/${0}`]);
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
        this._usersService.eliminar(data.id).subscribe(r => {
          this._spinner.hide()
          console.log(r);
          this.getUsuarios();
        })
      }
    })
  }
}
