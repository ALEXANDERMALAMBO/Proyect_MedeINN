import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';
import { __values } from 'tslib';
import {  GraficalinealService} from '../../../core/services/graficalineal/graficalineal.service';
@Component({
  selector: 'app-baire',
  templateUrl: './baire.component.html',
  styleUrls: ['./baire.component.scss']
})
export class BAireComponent implements OnInit {

  Fecha: any;
  result:any;
  Calidad:any;
  chart: any = [];



 constructor(private servoce:GraficalinealService ){
  Chart.register(...registerables);
 }

   ngOnInit(): void {
   
    this.servoce.getListTarjetas().then((res) => {
      this.result = res;
       console.log(this.result);
      this.Fecha = this.result.map((coins: any) => coins.fecha);
      console.log(this.Fecha);
      this.Calidad = this.result.map((coins: any) => coins.calidad_Aire);
      // console.log(this.coinPrice);
       console.log(this.Calidad);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Calidad,
              borderColor: '#3e95cd',
              
              label: 'Grafica Calidad de Aire',
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
