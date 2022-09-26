import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  baseApi = environment.urlApi;
  prefijo = 'catalogos';

  constructor(private _httpClient: HttpClientService) { }

  
  obtener() {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}`);
  }

  registrar(catalogo: any) {
    return this._httpClient.post(`${this.baseApi}/${this.prefijo}`, catalogo);
  }

  actualizar(catalogo: any, id: string | any) {
    return this._httpClient.put(`${this.baseApi}/${this.prefijo}?id=${id}`, catalogo);
  }

  eliminar(id: string | any) {
    return this._httpClient.delete(`${this.baseApi}/${this.prefijo}?id=${id}`, {});
  }

  obtenerById(id: string | any) {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}?id=${id}`);
  }
}
