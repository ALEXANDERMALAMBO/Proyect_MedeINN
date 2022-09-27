import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';

import { __values } from 'tslib';
import {  GraficalinealService} from '../../../core/services/graficalineal/graficalineal.service';
@Component({
  selector: 'app-bhum',
  templateUrl: './bhum.component.html',
  styleUrls: ['./bhum.component.scss']
})
export class BHumComponent implements OnInit {
  Fecha: any;
  result:any;
  Hume:any;
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
      this.Hume = this.result.map((coins: any) => coins.humedad);
      // console.log(this.coinPrice);
       console.log(this.Hume);

      this.chart2 = new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Hume,
              borderColor: '#3e95cd',
              
              label: 'Grafica Humedad',
              xAxisID:'Fecha/Hora',
              yAxisID: 'Temperatura en Grados Centigrados',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
      
    });
  }

  

}
