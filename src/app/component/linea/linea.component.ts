import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,Color, Chart, registerables, } from 'chart.js';
import { SensorService } from '../../core/services/sensor/sensor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { __values } from 'tslib';
import {  GraficalinealService} from '../../core/services/graficalineal/graficalineal.service';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss']
})
export class LineaComponent {


  Fecha: any;
  result:any;
  Temp:any;
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
      this.Temp = this.result.map((coins: any) => coins.temperatura);
      // console.log(this.coinPrice);
       console.log(this.Temp);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.Fecha,
          datasets: [
            {
              data: this.Temp,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Grafica Temperatura',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
  }

  
  


  /////traer base de datos
  /*public lineChartData: Array<any> = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Humedad' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Temperatura' },
  { data: [18, 48, 77, 9, 100, 27, 40], label: 'Calidad_Aire' },

  ]

  public lineChartLabels: Array<any> = ['January', 'Febrary', 'March', 'April', 'Mayo', 'Junio', 'Julio'];
  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: "#fff",
      poifitHoverBackgroundColor: "#fff",
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
    // grey.
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroudColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8'
    },
  ];

  public lineChartlegend: boolean = true;
  public lineChartType: ChartType  = 'line';

 public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
 for (let i = 0; i < this.lineChartData.length; i++) {
       _lineChartData[i] = {
        data: new Array(this.lineChartData[i].data.length), label:
           this.lineChartData[i].label
  };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
     }
// // events
public chartClicked(e: any): void {
    console.log(e);

  }

  public chartHovered(e: any): void {
    console.log(e);

  }*/
}
