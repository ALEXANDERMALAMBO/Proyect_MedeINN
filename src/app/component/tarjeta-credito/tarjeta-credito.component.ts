import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../core/services/sensor/sensor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
   
    private _docentesService: SensorService,
    private fb:FormBuilder, 
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
