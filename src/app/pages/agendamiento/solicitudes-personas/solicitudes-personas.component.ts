import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/spinner/spinner.service';
import { PlacesService } from '../../../core/services/places/places.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ValoresCatalogosService } from '../../../core/services/valores-catalogos/valores-catalogos.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { InscripcionesJornadasService } from '../../../core/services/inscripciones-jornadas/inscripciones-jornadas.service';

@Component({
  selector: 'app-solicitudes-personas',
  templateUrl: './solicitudes-personas.component.html',
  styleUrls: ['./solicitudes-personas.component.scss']
})
export class SolicitudesPersonasComponent implements OnInit {
  listDepartamentos: any[];
  listCiudades: any[];
  formularioSolicitudPersonas: FormGroup;
  autorizacionDatosPersonales: boolean;
  datosSensibles: boolean;
  listSexo: any[];
  listEdad: any[];
  listNivelEducativo: any[];
  listOcupacionActual: any[];
  listOrganizacion: any[];
  listEtnia: any[];
  listDiscapacidad: any[];
  listUbicacion: any[];
  listMedios: any[];
  listMotivoCurso: any[];
  listEstiloAprendizaje: any[];


  constructor(
    private _spinner: SpinnerService,
    private _placesService: PlacesService,
    private _valoresCatalogosService: ValoresCatalogosService,
    private _inscripcionesJornadasService: InscripcionesJornadasService
  ) {
    this.listEstiloAprendizaje = [];
    this.listMotivoCurso = [];
    this.listMedios = [];
    this.listUbicacion = [];
    this.listDiscapacidad = [];
    this.listEtnia = [];
    this.listOrganizacion = []
    this.listOcupacionActual = [];
    this.listNivelEducativo = [];
    this.listEdad = [];
    this.listSexo = [];
    this.autorizacionDatosPersonales = false;
    this.datosSensibles = false;
    this.listDepartamentos = [];
    this.listCiudades = [];
    this.formularioSolicitudPersonas = new FormGroup({
      email: new FormControl(""),
      documentoDeIdentidad: new FormControl(""),
      nombres: new FormControl(""),
      apellidos: new FormControl(""),
      numeroTelefonico: new FormControl(""),
      ubicacion: new FormControl(""),
      paisResidencia: new FormControl(""),
      departamentoResidencia: new FormControl(""),
      ciudadResidencia: new FormControl(""),
      sexo: new FormControl(""),
      rangoEdad: new FormControl(""),
      nivelEducativo: new FormControl(""),
      ocupacionActual: new FormControl(""),
      organizacionPerteneciente: new FormControl(""),
      nombreEmpresa: new FormControl(""),
      grupoEtnico: new FormControl(""),
      situacionDiscapacidad: new FormControl(""),
      isCampesino: new FormControl(""),
      comunidadLgtbiq: new FormControl(""),
      medioComunicacion: new FormControl(""),
      motivoAprendizaje: new FormControl(""),
      estiloAprendizaje: new FormControl(""),
      informacionPrevioContenido: new FormControl(""),
      lugarInformacionPrevioContenido: new FormControl(""),
      comentarios: new FormControl(""),
    })
  }


  ngOnInit(): void {
    this.getPlaces(0);
    this.getSexo();
    this.getEdades();
    this.getNivelEducativo();
    this.getOcupacionActual();
    this.getOrganizacion();
    this.getEtnia();
    this.getDiscapacidad();
    this.getUbicacion();
    this.getMedios();
    this.getMotivoCurso();
    this.getEstiloAprendizaje();

  }

  getPlaces(idPadre: any) {
    this._spinner.show()
    this._placesService.obtenerPlaceByIdPadre(idPadre).subscribe((data: any) => {
      this._spinner.hide()
      console.log(data);
      if (idPadre == 0) {
        this.listDepartamentos = data.data;
      } else {
        this.listCiudades = data.data;
      }
    })
  }

  changePlace() {
    if (this.formularioSolicitudPersonas.controls["departamentoResidencia"].value !== "") {
      this.getPlaces(this.formularioSolicitudPersonas.controls["departamentoResidencia"].value);

    }
    else {
      this.listCiudades = [];
    }
  }

  enviar() {
    console.log(this.formularioSolicitudPersonas.controls["email"].value);
    var data = {
      id_jornada: 1,
      email: this.formularioSolicitudPersonas.controls["email"].value,
      identificacion: this.formularioSolicitudPersonas.controls["documentoDeIdentidad"].value,
      nombres: this.formularioSolicitudPersonas.controls["nombres"].value,
      apellidos: this.formularioSolicitudPersonas.controls["apellidos"].value,
      telefono: this.formularioSolicitudPersonas.controls["numeroTelefonico"].value,
      id_ubicacion: this.formularioSolicitudPersonas.controls["ubicacion"].value,
      pais: this.formularioSolicitudPersonas.controls["paisResidencia"].value,
      id_departamento: this.formularioSolicitudPersonas.controls["departamentoResidencia"].value,
      id_ciudad: this.formularioSolicitudPersonas.controls["ciudadResidencia"].value,
      id_sexo: this.formularioSolicitudPersonas.controls["sexo"].value,
      id_edad: this.formularioSolicitudPersonas.controls["rangoEdad"].value,
      id_nivel_educativo: this.formularioSolicitudPersonas.controls["nivelEducativo"].value,
      id_ocupacion_actual: this.formularioSolicitudPersonas.controls["ocupacionActual"].value,
      id_organizaciones: this.formularioSolicitudPersonas.controls["organizacionPerteneciente"].value,
      id_etnia: this.formularioSolicitudPersonas.controls["grupoEtnico"].value,
      id_discapacidad: this.formularioSolicitudPersonas.controls["situacionDiscapacidad"].value,
      is_campesino: this.formularioSolicitudPersonas.controls["isCampesino"].value,
      is_lgtbiq: this.formularioSolicitudPersonas.controls["comunidadLgtbiq"].value,
      id_medio_comunicacion: this.formularioSolicitudPersonas.controls["medioComunicacion"].value,
      id_motivacion: this.formularioSolicitudPersonas.controls["motivoAprendizaje"].value,
      id_estilo_aprendizaje: this.formularioSolicitudPersonas.controls["estiloAprendizaje"].value,
      informacion_previa: this.formularioSolicitudPersonas.controls["informacionPrevioContenido"].value,
      lugar_informacion_previa: this.formularioSolicitudPersonas.controls["lugarInformacionPrevioContenido"].value,
      comentarios: this.formularioSolicitudPersonas.controls["comentarios"].value,
      status: 1
    }

    console.log(data);
    this._spinner.show();
    this._inscripcionesJornadasService.registrar(data).subscribe((resp: any) => {
      this._spinner.hide();
      alert("Registro Ingresado Exitosamente");
      window.location.href="https://www.sic.gov.co/";
      console.log(resp);
    })

  }

  getSexo() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("SEXO").subscribe((data: any) => {
      console.log(data);
      this._spinner.hide();
      this.listSexo = data;

    })
  }

  getEdades() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("EDADES").subscribe((data: any) => {
      console.log(data);
      this._spinner.hide();
      this.listEdad = data;

    })
  }

  getNivelEducativo() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("NIVEL_EDU").subscribe((data: any) => {
      console.log(data);

      this.listNivelEducativo = data;

    })
  }

  getOcupacionActual() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("OCUPACION").subscribe((data: any) => {
      console.log(data);
      this._spinner.hide;
      this.listOcupacionActual = data;

    })
  }

  getOrganizacion() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("ORGANIZACIONES").subscribe((data: any) => {
      console.log(data);
      this._spinner.hide();
      this.listOrganizacion = data;

    })
  }

  getEtnia() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("ETNIAS").subscribe((data: any) => {
      console.log(data);
      this._spinner.hide();
      this.listEtnia = data;
    })
  }

  getDiscapacidad() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("DISCAPACIDADES").subscribe((data: any) => {
      console.log();
      this._spinner.hide();
      this.listDiscapacidad = data;

    })
  }

  getUbicacion() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("UBICACION").subscribe((data: any) => {
      console.log(data);
      this._spinner.hide();
      this.listUbicacion = data;

    })
  }

  changeUbicacion(){
     let idUbicacion=this.formularioSolicitudPersonas.controls["ubicacion"].value
     if (idUbicacion==32){
       this.formularioSolicitudPersonas.controls["paisResidencia"].setValue("Colombia")
       this.formularioSolicitudPersonas.controls["paisResisdencia"].disabled
     }
     else{
      this.formularioSolicitudPersonas.controls["paisResidencia"].setValue("")
      this.formularioSolicitudPersonas.controls["paisResisdencia"].enabled

     }
    console.log(this.formularioSolicitudPersonas.controls["ubicacion"].value);
    
    
  }

  getMedios() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("MEDIO_COM").subscribe((data: any) => {
      console.log();
      this._spinner.hide();
      this.listMedios = data;

    })
  }

  getMotivoCurso() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("MOTIVO_CURSO").subscribe((data: any) => {
      console.log();
      this._spinner.hide();
      this.listMotivoCurso = data;


    })
  }

  getEstiloAprendizaje() {
    this._spinner.show();
    this._valoresCatalogosService.obtenerByCode("ESTILO_APRENDIZAJE").subscribe((data: any) => {
      this._spinner.hide();
      console.log();
      this.listEstiloAprendizaje = data;
    })
  }

}
