import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpinnerService } from '../../../core/services/spinner/spinner.service';
import { EmpresasService } from '../../../core/services/empresas/empresas.service';
import { ActionsDialogComponent } from '../../../shared/actions-dialog/actions-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlacesService } from '../../../core/services/places/places.service';
import { TypesIdentificationService } from '../../../core/services/typesIdentification/types-identification.service';
import { CategoriasService } from '../../../core/services/categorias/categorias.service';
import { JornadasService } from '../../../core/services/jornadas/jornadas.service';
import { SolicitudesEmpresasService } from '../../../core/services/solicitudes-empresas/solicitudes-empresas.service';
import { ValoresCatalogosService } from '../../../core/services/valores-catalogos/valores-catalogos.service';


import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.scss']
})
export class FormularioInscripcionComponent implements OnInit {
  autorizacion: boolean;
  listnuparticipantes: any[];
  listTematicas: any[];
  listTema: any[];
  EmpresaForm: FormGroup;
  listPublico: any[];
  listDepartamentos: any[];
  listCiudades: any[];
  listCategorias: any[];
  myDatePicker: Date;

  viewCalendar: boolean = false;
  fechaSeleccionada: any;


  public events: any[];
  public options: any;


  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _empresasService: EmpresasService,
    private _placesService: PlacesService,
    private _typesIdentificationService: TypesIdentificationService,
    private _categoriasService: CategoriasService,
    private _jornadasService: JornadasService,
    private _solicitudService: SolicitudesEmpresasService,
    private _valoresCatalogosService: ValoresCatalogosService,
    
  ) {
    this.autorizacion = false;
    this.listnuparticipantes = [];
    this.listTematicas = [];
    this.listTema = [];
    this.listPublico = [];
    this.listDepartamentos = [];
    this.listCiudades = [];
    this.listCategorias = [];
    this.myDatePicker = new Date();
    this.EmpresaForm = new FormGroup({
      empresa: new FormControl(''),
      nitEmpresa: new FormControl(''),
      idCategoria: new FormControl(''),
      idDepartamento: new FormControl(''),
      idCiudad: new FormControl(''),
      temaJornada: new FormControl(''),
      tematicas: new FormControl(""),
      idPublico: new FormControl(''),
      perfil: new FormControl(''),
      numeroParticipantes: new FormControl(""),
      representante: new FormControl(""),
      cargo: new FormControl(""),
      email: new FormControl(''),
      telefono: new FormControl(''),
      terminos: new FormControl(false),


    });

    this.viewCalendar = true;
    //this.events = [];
    this.events = [
      {
        title: 'No Disponible',
        start: '2022-08-24',
        end: '2022-08-27',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"red",
        borderColor:"red",
        fontSize: "4.85em",
        display: 'background',
      },
      {
        title: '09:00-11:00 am',
        start: '2022-08-29T09:00:00',
        end: '2022-08-29T11:00:00',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"green",
        borderColor:"green",
        fontSize: "4.85em",
        display: 'background',
      },
      {
        title: 'No Disponible',
        start: '2022-08-31',
        end: '2022-08-31',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"red",
        borderColor:"red",
        fontSize: "4.85em",
        display: 'background',
      },
      {
        title: 'No Disponible',
        start: '2022-08-29',
        end: '2022-08-29',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"red",
        borderColor:"red",
        fontSize: "4.85em",
        display: 'background',
      },
      {
        title: '03:00-05:00pm',
        start: '2022-08-31T15:00:00',
        end: '2022-08-31T17:00:00',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"green",
        borderColor:"green",
        fontSize: "4.85em",
        display: 'background',
      },
      {
        title: '03:00-05:00pm',
        start: '2022-08-24',
        end: '2022-08-24',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"green",
        borderColor:"green",
        fontSize: "4.85em",
        display: 'background',
      },
      {
        title: '03:00-05:00pm',
        start: '2022-08-25T15:00:00',
        end: '2022-08-25T17:00:00',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"green",
        borderColor:"green",
        fontSize: "4.85em",
        display: 'background',
      },
      {
        title: '03:00-05:00pm',
        start: '2022-08-26T15:00:00',
        end: '2022-08-26T17:00:00',
        // start: new Date(),
        description: "jornada agendada",
        backgroundColor:"green",
        borderColor:"green",
        //fontSize: "4.85em",
        display: 'background',
      }
   
   
    ];
    
    this.options = [];
  }

  ngOnInit(): void {
    // this.getJornadas()
    this.getPlaces(0)
    // this.getTypesIdentifications();
    this.getCategorias();
    this.getTema();
    this.getPublico();
    this.getParticipantes();



    let fechaActual = new Date()
    let fechaFinal = new Date(new Date().setMonth(new Date().getMonth() + 1));
    this.options = {
      //dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleDateClick.bind(this),
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      calendarVisible: true,
      defaulDate: new Date(),
      locale: 'es',
      selectMirror: true,
      selectable: true,
      // selectHelper:true,
      event: this.events,

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

  getPublico() {
    this._spinner.show()
    this._valoresCatalogosService.obtenerByCode("PUBLICO").subscribe((data: any) => {
      this._spinner.hide()
      this.listPublico = data;
    })
  }

  getParticipantes() {
    this._spinner.show()
    this._valoresCatalogosService.obtenerByCode("NUM_PARTICIPANTES").subscribe((data: any) => {
      this._spinner.hide()
      this.listnuparticipantes = data;
    })
  }


  getTema() {
    this._spinner.show()
    this._valoresCatalogosService.obtenerByCode("TEMAS").subscribe((data: any) => {
      // console.log(data);
      this._spinner.hide();
      this.listTema = data;
    })
  }

  getTematica() {
    this._spinner.show()
    let dependencia = this.EmpresaForm.controls["temaJornada"].value
    this._valoresCatalogosService.obtenerByDependencia(dependencia).subscribe((data: any) => {
      this._spinner.hide();
      this.listTematicas = data;
    })
  }

  getCategorias() {
    this._categoriasService.obtener().subscribe((data: any) => {
      this.listCategorias = data.data;
    })
  }
  getPlaces(idPadre: any) {
    this._spinner.show()
    this._placesService.obtenerPlaceByIdPadre(idPadre).subscribe((data: any) => {
      this._spinner.hide()
      // console.log(data);
      if (idPadre == 0) {
        this.listDepartamentos = data.data;
      } else {
        this.listCiudades = data.data;
      }
    })
  }

  changePlace() {
    if (this.EmpresaForm.controls['idDepartamento'].value !== '') {
      this.getPlaces(this.EmpresaForm.controls['idDepartamento'].value);
    } else {
      this.listCiudades = []
    }
  }

  
  handleDateClick(arg: any) {
    // alert('date click! ' + arg.dateStr)

    if (`${arg.event.title}` == 'No Disponible')
    {
      alert('Fecha No disponible');
    }
    else
    {
      let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
        data: {
          message: `Agendamiento`,
          content: `desea agendar en esta fecha:  ${arg.event.start} `,
          severity: 'info',
        },
      });

      dialogConfirm.afterClosed().subscribe(evt => {
        if (evt == true) {
          //console.log("guardar");
          //this.viewCalendar = false;
          // this.events.push(
          //   {
          //     title: "Jornada solicitada",
          //     start: arg.dateStr,
          //     // start: new Date(),
          //     description: "jornada agendada",
          //     color:"green"
          //   }
          // )
          // this.fechaSeleccionada = arg.dateStr;
          // this.events = [
          //   {
          //     title: arg.dateStr,
          //     start: arg.dateStr,
          //     // start: new Date(),
          //     description: "jornada agendada",
          //     backgroundColor:"#5B8BFF",
          //     borderColor:"red",
             
          //   }
          // ]
  
          // setTimeout(() => {
          //   this.viewCalendar = true;
          // }, 10);
  
          // this.options.prueba = (this.events)
          // console.log(this.options);
          this.agendar();
        }
        else {
          console.log("cancelar");
        }
      })
    } 

  }



  agendar() {
    let inputRadio = document.getElementsByName('autorizacion');
    let valueDatosPersonales = 0;
    inputRadio.forEach((element: any) => {
      if (element.checked) {
        valueDatosPersonales = element.value;
      }
    })
    console.log(valueDatosPersonales);


    console.log(this.EmpresaForm.controls["terminos"].value);
    let terminos = (this.EmpresaForm.controls["terminos"].value);
    if (terminos == true && valueDatosPersonales == 1) {
      this._spinner.show()

      var data = {
        nombre: this.EmpresaForm.controls["empresa"].value,
        descripcion: this.EmpresaForm.controls["empresa"].value,
        id_tipo_identificacion: '1',
        identificacion: this.EmpresaForm.controls["nitEmpresa"].value,
        id_categoria: this.EmpresaForm.controls["idCategoria"].value,
        id_departamento: this.EmpresaForm.controls["idDepartamento"].value,
        id_ciudad: this.EmpresaForm.controls["idCiudad"].value,
        representante: this.EmpresaForm.controls["representante"].value,
        email: this.EmpresaForm.controls["email"].value,
        telefono: this.EmpresaForm.controls["telefono"].value,
        enabled: "1",
      }


      console.log(data);
      this._empresasService.registrar(data).subscribe((resp: any) => {

        console.log(resp);
        // if (resp.id) {
        //   var dataSolicitud = {
        //     temaJornada: this.EmpresaForm.controls["temaJornada"].value,
        //     tematicas: this.EmpresaForm.controls["tematicas"].value,
        //     idPublico: this.EmpresaForm.controls["idPublico"].value,
        //     perfil: this.EmpresaForm.controls["perfil"].value,
        //     numeroParticipantes: this.EmpresaForm.controls["numeroParticipantes"].value,
        //     cargo: this.EmpresaForm.controls["cargo"].value,
        //     id_jornada: "1",
        //     id_empresa: resp.id,
        //     enabled: 1,
        //     fecha: '2022-06-29',
        //   }
        //   this._solicitudService.registrar(dataSolicitud).subscribe((respsol: any) => {
        //     this._spinner.hide()
        //     console.log(respsol);
        //     let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
        //       data: {
        //         message: `registro exitoso`,
        //         content: `su solicitud ha sido creada exitosamente`,
        //         severity: 'success',
        //       },
        //     });
        //     // window.location.href = "https://www.sic.gov.co/";
        //     this._router.navigate(['agendamiento/cronograma-solicitud']);
        //   })

        // }
        if (resp.id) {
          //this._router.navigate(['/agendamiento/cronograma-solicitud'])
        
        
          var dataSolicitud = {
            temaJornada: this.EmpresaForm.controls["temaJornada"].value,
            tematicas: this.EmpresaForm.controls["tematicas"].value,
            idPublico: this.EmpresaForm.controls["idPublico"].value,
            perfil: this.EmpresaForm.controls["perfil"].value,
            numeroParticipantes: this.EmpresaForm.controls["numeroParticipantes"].value,
            id_jornada: "1",
            enabled: 1,
            fecha: this.fechaSeleccionada,
            id_empresa: resp.id,
          }
          console.log(dataSolicitud);
          
          this._solicitudService.registrar(dataSolicitud).subscribe((respsol: any) => {
            this._spinner.hide()
            console.log(respsol);
            let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
              data: {
                message: `registro exitoso`,
                content: `su solicitud ha sido creada exitosamente`,
                severity: 'success',
              },
            });
             window.location.href = "https://www.sic.gov.co/";
          })
        
        
        
        
        
        
        
        }
        else{
          let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
            data: {
              message: `error en el registro`,
              content: `no es posible registrar la empresa por favor verifique la información `,
              severity: 'error',
            },
          });

        }
      })
    }
    else {
      let dialogConfirm = this._dialog.open(ActionsDialogComponent, {
        data: {
          message: `campos requeridos`,
          content: `debes aceptar nuestros terminos y condiciones/politicas datos personales `,
          severity: 'warning',
        },
      });
    }

  }


}
