import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MatDialog } from '@angular/material/dialog';
import { ActionsDialogComponent } from '../../shared/actions-dialog/actions-dialog.component';

import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { FormControl, FormGroup } from '@angular/forms';





@Component({
  selector: 'app-planeador',
  templateUrl: './planeador.component.html',
  styleUrls: ['./planeador.component.scss']
})
export class PlaneadorComponent implements OnInit {

  listTema: any[];
  listTematicas: any[];
  listPublico: any[];
  listnuparticipantes: any[];
  EmpresaForm: FormGroup;
  viewCalendar: boolean = false;
  fechaSeleccionada: any;



  public events: any[];
  public options: any;

  constructor(

    private _spinner: SpinnerService,
    private _dialog: MatDialog,
  ) {
    this.fechaSeleccionada = "";
    this.viewCalendar = true;
    this.listTema = [];
    this.listTematicas = [];
    this.listPublico = [];
    this.listnuparticipantes = [];
    this.EmpresaForm = new FormGroup({
      temaJornada: new FormControl(''),
      tematicas: new FormControl(""),
      idPublico: new FormControl(''),
      perfil: new FormControl(''),
      numeroParticipantes: new FormControl(""),
    });


    this.events = [];

    this.options = [];

    
  }

  ngOnInit(): void {



     


    let fechaActual = new Date()
    let fechaFinal = new Date(new Date().setMonth(new Date().getMonth() + 2));
    
    
    
    this.options = {
      dateClick: this.handleDateClick.bind(this),
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      calendarVisible: true,
      defaulDate: new Date(),
      locale: 'es',
      selectMirror: true,
      selectable: true,
      // selectHelper:true,
      event:  [
        { title: 'event 1', date: '2022-08-15' },
        { title: 'event 2', date: '2022-08-16' }
      ],

      validRange: {
        start: fechaActual,
        end: fechaFinal,
      },




      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      
    }


  }
 


 



  handleDateClick(arg: any) {
    // alert('date click! ' + arg.dateStr)

    let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
      data: {
        message: `Agendamiento`,
        content: `desea agendar en esta fecha: ${arg.dateStr}`,
        severity: 'info',
      },
    });

    dialogConfirm.afterClosed().subscribe(evt => {
      if (evt == true) {
        console.log("guardar");
        this.viewCalendar = false;
        // this.events.push(
        //   {
        //     title: "Jornada solicitada",
        //     start: arg.dateStr,
        //     // start: new Date(),
        //     description: "jornada agendada",
        //     color:"green"
        //   }
        // )
        this.fechaSeleccionada = arg.dateStr;
        this.events = [
          {
            title: arg.dateStr,
            start: arg.dateStr,
            // start: new Date(),
            description: "jornada agendada",
            backgroundColor:"#5B8BFF",
            borderColor:"red",
            
            
          }
        ]

        setTimeout(() => {
          this.viewCalendar = true;
        }, 10);

        this.options.prueba = (this.events)
        console.log(this.options);




      }
      else {
        console.log("cancelar");

      }
    })

    

  }




  
        
       

      }

    

  



