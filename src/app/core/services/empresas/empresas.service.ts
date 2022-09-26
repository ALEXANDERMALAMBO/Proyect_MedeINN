import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  baseApi = environment.urlApi;
  constructor(private _httpClient: HttpClientService) { }

  obtener() {
    return this._httpClient.get(`${this.baseApi}/empresas`);
  }

  registrar(empresa: any) {
    return this._httpClient.post(`${this.baseApi}/empresas`, empresa);
  }

  actualizar(empresa: any, id: string | any) {
    return this._httpClient.put(`${this.baseApi}/empresas/${id}`, empresa);
  }

  eliminar(id: string | any) {
    return this._httpClient.delete(`${this.baseApi}/empresas/${id}`, {});
  }

  obtenerById(id: string | any) {
    return this._httpClient.get(`${this.baseApi}/empresas/${id}`);
  }

  obtenerByNit(nit: string | any) {
    return this._httpClient.post(`${this.baseApi}/searchEmpresaByNit`, { nit: nit });
  }
}
