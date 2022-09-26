import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApi = environment.urlApi;
  prefijo = 'usuarios';
  constructor(private http: HttpClient) {}

  listarUsuarios() {
    return this.http.get(`${this.baseApi}/usuarios`);
  }

  obtener() {
    return this.http.get(`${this.baseApi}/user`);
  }

  registrar(user: any) {
    return this.http.post(`${this.baseApi}/usuarios`, user);
  }

  // actualizar(user: any) {
  //   return this.http.put(`${this.baseApi}/user`, user);
  // }

  actualizar(usuario: any, id: string | any) {
    return this.http.put(`${this.baseApi}/${this.prefijo}/${id}`, usuario);
  }


  eliminar(id: string | number) {
    return this.http.delete(`${this.baseApi}/user?id=${id}`);
  }

  obtenerById(id: string | any) {
    return this.http.get(`${this.baseApi}/${this.prefijo}/${id}`);
  }
}
