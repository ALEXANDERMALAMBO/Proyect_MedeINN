import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../core/services/users/users.service';


@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.scss']
})
export class FormularioUsuariosComponent implements OnInit {
  listRoll: any[];
  UsuariosFrom: FormGroup;
  idAction: any;
  idUsuarios: any;
  constructor(
    private _spinner: SpinnerService,
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _UsuariosService: UsersService
  ) {
    this.listRoll = [];
    this.UsuariosFrom = new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl(''),
      identificacion: new FormControl(''),
      telefono: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.idAction = this._route.snapshot.params['idAction']
    this.idUsuarios = this._route.snapshot.params['idUsuario']
    if (this.idAction != 1) {
      this.loadInfo()
    }
  }

  loadInfo() {
    this._UsuariosService.obtenerById(this.idUsuarios).subscribe((data: any) => {
      if (data.id) {
        console.log(data);

        this.UsuariosFrom.controls['nombre'].setValue(data.name);
        this.UsuariosFrom.controls['email'].setValue(data.email);
        this.UsuariosFrom.controls['roll'].setValue(data.roll);
        this.UsuariosFrom.controls['pass'].setValue(data.roll);
      }
    })
  }
  getRolls() {
    
      this.listRoll = ['Admin'];
    }
  

  guardar() {
    this._spinner.show()
    let data = {
      id: null,
      name: this.UsuariosFrom.value.nombre,
      email: this.UsuariosFrom.value.email,
      password: this.UsuariosFrom.value.pass
    }
    console.log(data);
    //console.log(data);
   // if (this.idAction == 1) {
      this._UsuariosService.registrar(data).subscribe((resp: any) => {
        this._spinner.hide()
        console.log(resp);
        if (resp.id) {
          alert('Usuario creado con exito');
          this._router.navigate(['/dashboard/component/usuarios']);
        }
      })
    // } else {
    //   this._UsuariosService.actualizar(data, this.idUsuarios).subscribe((resp: any) => {
    //     this._spinner.hide()
    //     console.log(resp);
    //     if (resp.id) {
    //       // alert('Empresa creada con exito');
    //       this._router.navigate(['/dashboard/component/usuarios']);
    //     }
    //   })
    // }

  }
}

