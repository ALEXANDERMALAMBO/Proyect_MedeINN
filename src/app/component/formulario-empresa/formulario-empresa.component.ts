import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { EmpresasService } from '../../core/services/empresas/empresas.service';
import { ActionsDialogComponent } from '../../shared/actions-dialog/actions-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../core/services/places/places.service';
import { TypesIdentificationService } from '../../core/services/typesIdentification/types-identification.service';
import { CategoriasService } from '../../core/services/categorias/categorias.service';
@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.scss']
})
export class FormularioEmpresaComponent implements OnInit {
  EmpresaForm: FormGroup;
  listDepartamentos: any[];
  listCiudades: any[];
  listTypesId: any[];
  listCategorias: any[];
  idAction: any;
  idEmpresa: any;
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _empresasService: EmpresasService,
    private _placesService: PlacesService,
    private _typesIdentificationService: TypesIdentificationService,
    private _categoriasService: CategoriasService,
    private _route: ActivatedRoute
  ) {
    this.listDepartamentos = [];
    this.listCiudades = [];
    this.listTypesId = [];
    this.listCategorias = [];
    this.EmpresaForm = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      identificacion: new FormControl(''),
      representante: new FormControl(''),
      idDepartamento: new FormControl(''),
      idCiudad: new FormControl(''),
      idTypeIdentification: new FormControl(''),
      idCategoria: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.idAction = this._route.snapshot.params['idAction']
    this.idEmpresa = this._route.snapshot.params['idEmpresa']
    this.getPlaces(0)
    this.getTypesIdentifications();
    this.getCategorias();
    if (this.idAction != 1) {
      this.loadInfo()
    }
  }

  loadInfo() {
    this._empresasService.obtenerById(this.idEmpresa).subscribe((data: any) => {
      if (data.id) {
        console.log(data);

        this.EmpresaForm.controls['nombre'].setValue(data.nombre);
        this.EmpresaForm.controls['descripcion'].setValue(data.descripcion);
        this.EmpresaForm.controls['identificacion'].setValue(data.identificacion);
        this.EmpresaForm.controls['representante'].setValue(data.representante);
        this.EmpresaForm.controls['idDepartamento'].setValue(data.id_departamento);
        this.getPlaces(this.EmpresaForm.controls['idDepartamento'].value);
        this.EmpresaForm.controls['idCiudad'].setValue(data.id_ciudad);
        this.EmpresaForm.controls['idTypeIdentification'].setValue(data.id_tipo_identificacion);
        this.EmpresaForm.controls['idCategoria'].setValue(data.id_categoria);
      }
    })
  }
  getTypesIdentifications() {
    this._typesIdentificationService.obtener().subscribe((data: any) => {
      this.listTypesId = data.data;
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
  consultar() {

    this._spinner.show()
    let data = {
      nombre: this.EmpresaForm.value.nombre,
      descripcion: '*' + this.EmpresaForm.value.descripcion,
      id_tipo_identificacion: this.EmpresaForm.value.idTypeIdentification,
      identificacion: this.EmpresaForm.value.identificacion,
      representante: this.EmpresaForm.value.representante,
      id_categoria: this.EmpresaForm.value.idCategoria,
      id_departamento: this.EmpresaForm.value.idDepartamento,
      id_ciudad: this.EmpresaForm.value.idCiudad,
      enabled: 1
    }

    console.log(data);
    if (this.idAction == 1) {
      this._empresasService.registrar(data).subscribe((resp: any) => {
        this._spinner.hide()
        console.log(resp);
        if (resp.id) {
          alert('Empresa creada con exito');
          this._router.navigate(['/dashboard/component/empresas']);
        }
      })
    }else{
      this._empresasService.actualizar(data,this.idEmpresa).subscribe((resp: any) => {
        this._spinner.hide()
        console.log(resp);
        if (resp.id) {
          // alert('Empresa creada con exito');
          this._router.navigate(['/dashboard/component/empresas']);
        }
      })
    }

  }

}
