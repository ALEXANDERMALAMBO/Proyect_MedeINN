import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';
import { __values } from 'tslib';
import {  GraficalinealService} from '../../../core/services/graficalineal/graficalineal.service';

@Component({
  selector: 'app-linea-benzeno',
  templateUrl: './linea-benzeno.component.html',
  styleUrls: ['./linea-benzeno.component.scss']
})
export class LineaBenzenoComponent implements OnInit {

  Fecha: any;
  result:any;
  Benzeno:any;
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
      this.Benzeno = this.result.map((coins: any) => coins.indice_Benzeno);
      // console.log(this.coinPrice);
       console.log(this.Benzeno);

      this.chart3 = new Chart('canvas3', {
        type: 'line',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Benzeno,
              borderColor: '#B4C207',
              fill: false,
              label: 'Grafica BENCENO',
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
