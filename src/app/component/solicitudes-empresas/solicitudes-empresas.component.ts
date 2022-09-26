import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SolicitudesEmpresasService } from '../../core/services/solicitudes-empresas/solicitudes-empresas.service';
import { ActionsDialogComponent } from '../../shared/actions-dialog/actions-dialog.component';

@Component({
  selector: 'app-solicitudes-empresas',
  templateUrl: './solicitudes-empresas.component.html',
  styleUrls: ['./solicitudes-empresas.component.scss']
})
export class SolicitudesEmpresasComponent implements OnInit {
  listSolicitudes: any[] = [];
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _solicitudesService: SolicitudesEmpresasService
  ) { }

  ngOnInit(): void {
    this.getSolicitudes()
  }

  getSolicitudes() {
    this._spinner.show()
    this._solicitudesService.obtener().subscribe((data: any) => {
      console.log(data);

      this._spinner.hide()
      this.listSolicitudes = data.data;
    })
  }
}
