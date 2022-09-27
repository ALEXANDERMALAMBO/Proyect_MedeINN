import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';
import { __values } from 'tslib';
import {  GraficalinealService} from '../../../core/services/graficalineal/graficalineal.service';
@Component({
  selector: 'app-linea-calidad-aire',
  templateUrl: './linea-calidad-aire.component.html',
  styleUrls: ['./linea-calidad-aire.component.scss']
})
export class LineaCalidadAireComponent implements OnInit {

 
  Fecha: any;
  result:any;
  Calidad_Aire:any;
  chart2: any = [];



 constructor(private servoce:GraficalinealService ){
  Chart.register(...registerables);
 }

   ngOnInit(): void {
   
    this.servoce.getListTarjetas().then((res) => {
      this.result = res;
       console.log(this.result);
      this.Fecha = this.result.map((coins: any) => coins.fecha);
      console.log(this.Fecha);
      this.Calidad_Aire = this.result.map((coins: any) => coins.calidad_Aire);
      // console.log(this.coinPrice);
       console.log(this.Calidad_Aire);

      this.chart2 = new Chart('canvas2', {
        type: 'line',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Calidad_Aire,
              borderColor: '#D63506',
              fill: false,
              label: 'Grafica Calidad de Aire',
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