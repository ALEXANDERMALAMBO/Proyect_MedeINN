import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  baseApi = environment.urlApi;
  prefijo = 'docentes';
  constructor(private _httpClient: HttpClientService) { }

  obtener() {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}`);
  }

  registrar(docente: any) {
    return this._httpClient.post(`${this.baseApi}/${this.prefijo}`, docente);
  }

  actualizar(docente: any, id: string | any) {
    return this._httpClient.put(`${this.baseApi}/${this.prefijo}/${id}`, docente);
  }

  eliminar(id: string | any) {
    return this._httpClient.delete(`${this.baseApi}/${this.prefijo}/${id}`, {});
  }

  obtenerById(id: string | any) {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}/${id}`);
  }
}
