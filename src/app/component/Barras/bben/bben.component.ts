import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';

import { __values } from 'tslib';
import {  GraficalinealService} from '../../../core/services/graficalineal/graficalineal.service';
@Component({
  selector: 'app-bben',
  templateUrl: './bben.component.html',
  styleUrls: ['./bben.component.scss']
})
export class BBenComponent implements OnInit {

  Fecha: any;
  result:any;
  Benz:any;
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
      this.Benz = this.result.map((coins: any) => coins.indice_Benzeno);
      // console.log(this.coinPrice);
       console.log(this.Benz);

      this.chart1 = new Chart('canvas1', {
        type: 'bar',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Benz,
              borderColor: '#3e95cd',
             
              label: 'Grafica Benceno',
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
