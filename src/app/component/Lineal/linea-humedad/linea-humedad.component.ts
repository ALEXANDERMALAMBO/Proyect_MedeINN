import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';
import { __values } from 'tslib';
import {  GraficalinealService} from '../../../core/services/graficalineal/graficalineal.service';

@Component({
  selector: 'app-linea-humedad',
  templateUrl: './linea-humedad.component.html',
  styleUrls: ['./linea-humedad.component.scss']
})
export class LineaHumedadComponent implements OnInit {

  Fecha: any;
  result:any;
  Humedad:any;
  chart1: any = [];



 constructor(private servoce:GraficalinealService ){
  Chart.register(...registerables);
 }

   ngOnInit(): void {
   
    this.servoce.getListTarjetas().then((res) => {
      this.result = res;
       console.log(this.result);
      this.Fecha = this.result.map((coins: any) => coins.fecha);
      console.log(this.Fecha);
      this.Humedad = this.result.map((coins: any) => coins.humedad);
      // console.log(this.coinPrice);
       console.log(this.Humedad);

      this.chart1 = new Chart('canvas1', {
        type: 'line',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Humedad,
              borderColor: '#0BBC10',
              fill: false,
              label: 'Grafica Humedad',
              xAxisID:'Fecha/Hora',
              yAxisID: 'Temperatura en Grados Centigrados',
              backgroundColor: 'rgba(87, 255, 127, 0.5)',
              borderWidth: 3,
            },
          ],
        },
      });
      
    });

}
}
