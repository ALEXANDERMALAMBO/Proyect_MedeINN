import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JornadasService } from '../../core/services/jornadas/jornadas.service';
import { ActionsDialogComponent } from '../../shared/actions-dialog/actions-dialog.component';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.scss']
})
export class JornadasComponent implements OnInit {
  listJornadas: any[] = [];
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _jornadasService: JornadasService
  ) { }

  ngOnInit(): void {
    this.getJornadas();
  }

  getJornadas() {
    this._spinner.show()
    this._jornadasService.obtener().subscribe((data: any) => {
      this._spinner.hide()
      this.listJornadas = data.data;
    })
  }

  ver(data: any) {
    var idAction = environment.idVer;
    this._router.navigate([`/dashboard/component/formulario-jornadas/${idAction}/${data.id}`]);
  }
  editar(data: any) {
    var idAction = environment.idEditar;
    this._router.navigate([`/dashboard/component/formulario-jornadas/${idAction}/${data.id}`]);
  }
  crear() {
    var idAction = environment.idCrear;
    this._router.navigate([`/dashboard/component/formulario-jornadas/${idAction}/${0}`]);
  }

  verParticipantes(){
    this._router.navigate([`/dashboard/component/listado-inscritos`]);
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
        this._jornadasService.eliminar(data.id).subscribe(r => {
          this._spinner.hide()
          console.log(r);
          this.getJornadas();
        })
      }
    })
  }
}
