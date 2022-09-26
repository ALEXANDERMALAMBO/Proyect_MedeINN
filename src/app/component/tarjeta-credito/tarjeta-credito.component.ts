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
import { SensorService } from '../../core/services/sensor/sensor.service';


import { ThisReceiver } from '@angular/compiler';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { __values } from 'tslib';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.scss']
})
export class TarjetaCreditoComponent implements OnInit {
  listSensor: any[] = [];
  accion='Agregar';
  form: FormGroup;
  id: number | undefined;
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _docentesService: SensorService,
    private _placesService: PlacesService,
    private _typesIdentificationService: TypesIdentificationService,
    private _categoriasService: CategoriasService,
    private fb:FormBuilder, 
    private toastr: ToastrService
  ) { this.form = this.fb.group( {
    humedad:['',Validators.required],
    temperatura:['',Validators.required],
    calidad_aire:['',Validators.required],
    indice_benzeno:['',Validators.required],
    fecha:['',Validators.required],
  }
  )}

  ngOnInit(): void {
    //this.getDocentes();
    this.obtenerTarjeta();
  }
  obtenerTarjeta(){

    this._docentesService.getListTarjetas().subscribe
    ({
     next: data=>{
        console.log(data);
        this.listSensor=data;
    },
    error: err=>{
        console.log(err);
    }
    });
  }

}
