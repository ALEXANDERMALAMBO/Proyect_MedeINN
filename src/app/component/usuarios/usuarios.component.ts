import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UsersService } from '../../core/services/users/users.service';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { ActionsDialogComponent } from '../../shared/actions-dialog/actions-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  listUsuarios: any[]=[];
  accion='Agregar';
  form: FormGroup;
  id: number | undefined;


  constructor(private router:Router,private _usuarioService: UsersService
    ,private fb:FormBuilder, private toastr: ToastrService) { 
  this.form = this.fb.group(
  {
    nombre:['',Validators.required],
    email:['',[Validators.required]],
    pass:['',[Validators.required]],
  }
  )
}
  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){

    this._usuarioService.getListUsuarios().subscribe
    ({
     next: data=>{
        console.log(data);
        this.listUsuarios=data;
    },
    error: err=>{
        console.log(err);
    }
    });
  }

  guardarUsuario(){
 

    const tarjeta:any ={
      nombre: this.form.get('nombre')?.value,
      email: this.form.get('email')?.value,
      pass: this.form.get('pass')?.value,
    
    }

    if(this.id==undefined){
      this._usuarioService.saveUsuarios(tarjeta).subscribe
      ({
       next: data=>{
        this.toastr.success('El Usuario fue registradoUsuario con exito!', 'Usuario Registrado!');
          this.listUsuarios=data;
          this.obtenerUsuario();
          this.form.reset();
      },
      error: err=>{
        this.toastr.error('Opss... Ha ocurrido un error','Error');
        console.log(err);
      }
      });
      //agregamos nueva tarjeta
     /* this._usuarioService.saveUsuarios(tarjeta).subscribe(data=>{
        this.toastr.success('El Usuario fue registradoUsuario con exito!', 'Usuario Registrado!');
        this.obtenerUsuario();
        this.form.reset();
      }, error=>{
        this.toastr.error('Opss... Ha ocurrido un error','Error');
        console.log(error);
      }
      )
*/
    }else{
      //editamos tarjeta
      tarjeta.id = this.id;
      this._usuarioService.updateUsuarios(this.id,tarjeta).subscribe(data=>{
        this.form.reset();
        this.accion='Agregar';
        this.id = undefined;
        this.toastr.info('Usuario fue actualizado con exito!','Usuario Actualizado');
        this.obtenerUsuario();
      },error=>{
        console.log(error);
      })


    }
   
    //console.log(tarjeta);
  }

  eliminarUsuario(id: number){
this._usuarioService.deleteUsuarios(id).subscribe(data=>{
  
this.toastr.error('El Usuario fue eliminado con exito!','Usuario eliminado');
this.obtenerUsuario();
},error=>{
console.log(error);
}

)
}


editarUsuario(tarjeta: any){
this.accion="Editar";
this.id=tarjeta.id;
this.form.patchValue({nombre: tarjeta.nombre,
pass: tarjeta.pass,
email: tarjeta.email,

}
)


}



}
