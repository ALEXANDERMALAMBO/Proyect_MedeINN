import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  baseApi = environment.urlApi;
  constructor(private _httpClient: HttpClientService) { }

  obtener() {
    return this._httpClient.get(`${this.baseApi}/places`);
  }

  registrar(persona: any) {
    return this._httpClient.post(`${this.baseApi}/places`, persona);
  }

  actualizar(persona: any, id: string | any) {
    return this._httpClient.put(`${this.baseApi}/places?id=${id}`, persona);
  }

  eliminar(id: string | any) {
    return this._httpClient.delete(`${this.baseApi}/places?id=${id}`, {});
  }

  obtenerById(id: string | any) {
    return this._httpClient.get(`${this.baseApi}/places?id=${id}`);
  }

  obtenerPlaceByIdPadre(idPadre: string | any) {
    return this._httpClient.post(`${this.baseApi}/obtenerPlaceByIdPadre`, { idPadre: idPadre });
  }
}
