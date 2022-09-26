import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValoresCatalogosService {
  baseApi = environment.urlApi;
  prefijo = 'valores-catalogos';

  constructor(private _httpClient: HttpClientService) { }

  obtener() {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}`);
  }

  registrar(valorCatalogo: any) {
    return this._httpClient.post(`${this.baseApi}/${this.prefijo}`, valorCatalogo);
  }

  actualizar(valorCatalogo: any, id: string | any) {
    return this._httpClient.put(`${this.baseApi}/${this.prefijo}?id=${id}`, valorCatalogo);
  }

  eliminar(id: string | any) {
    return this._httpClient.delete(`${this.baseApi}/${this.prefijo}?id=${id}`, {});
  }

  obtenerById(id: string | any) {
    return this._httpClient.get(`${this.baseApi}/${this.prefijo}?id=${id}`);
  }

  obtenerByCode(code: string){
    return this._httpClient.post(`${this.baseApi}/${this.prefijo}/obtenerValoresCatalogosByCode`,{codeCatalogo:code})
  }

  obtenerByDependencia(dependencia: any){
    return this._httpClient.post(`${this.baseApi}/${this.prefijo}/obtenerValoresCatalogosByDependencia`,{dependencia:dependencia})
  }


}
