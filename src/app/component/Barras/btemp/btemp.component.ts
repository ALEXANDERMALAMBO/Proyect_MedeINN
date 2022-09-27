import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';

import { __values } from 'tslib';
import {  GraficalinealService} from '../../../core/services/graficalineal/graficalineal.service';
@Component({
  selector: 'app-btemp',
  templateUrl: './btemp.component.html',
  styleUrls: ['./btemp.component.scss']
})
export class BtempComponent implements OnInit {

  Fecha: any;
  result:any;
  Temp:any;
  chart3: any = [];



 constructor(private servoce:GraficalinealService ){
  Chart.register(...registerables);
 }

   ngOnInit(): void {
   
    this.servoce.getListTarjetas().then((res) => {
      this.result = res;
       console.log(this.result);
      this.Fecha = this.result.map((coins: any) => coins.fecha);
      console.log(this.Fecha);
      this.Temp = this.result.map((coins: any) => coins.temperatura);
      // console.log(this.coinPrice);
       console.log(this.Temp);

      this.chart3 = new Chart('canvas3', {
        type: 'bar',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Temp,
              borderColor: '#3e95cd',
              
              label: 'Grafica Temperatura',
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
