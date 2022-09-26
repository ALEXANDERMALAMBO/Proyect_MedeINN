import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JornadasService {
  baseApi = environment.urlApi;
  prefijo = 'jornadas';
  constructor(private _httpClient: HttpClientService) { }

  obtener() {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}`);
  }

  registrar(jornada: any) {
    return this._httpClient.post(`${this.baseApi}/${this.prefijo}`, jornada);
  }

  actualizar(jornada: any, id: string | any) {
    return this._httpClient.put(`${this.baseApi}/${this.prefijo}/${id}`, jornada);
  }

  eliminar(id: string | any) {
    return this._httpClient.delete(`${this.baseApi}/${this.prefijo}/${id}`, {});
  }

  obtenerById(id: string | any) {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}/${id}`);
  }
}
