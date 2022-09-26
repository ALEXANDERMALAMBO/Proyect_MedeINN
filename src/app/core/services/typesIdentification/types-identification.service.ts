import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypesIdentificationService {
  baseApi = environment.urlApi;
  prefijo = 'types-identifications';
  constructor(private _httpClient: HttpClientService) { }

  obtener() {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}`);
  }

  registrar(persona: any) {
    return this._httpClient.post(`${this.baseApi}/${this.prefijo}`, persona);
  }

  actualizar(persona: any, id: string | any) {
    return this._httpClient.put(`${this.baseApi}/${this.prefijo}?id=${id}`, persona);
  }

  eliminar(id: string | any) {
    return this._httpClient.delete(`${this.baseApi}/${this.prefijo}?id=${id}`, {});
  }

  obtenerById(id: string | any) {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}?id=${id}`);
  }
}
