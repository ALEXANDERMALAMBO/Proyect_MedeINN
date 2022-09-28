import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApi = "https://localhost:7208/"
  prefijo = 'api/Login/'
  constructor(private http: HttpClient) {}

  getListUsuarios(): Observable<any>{
    return this.http.get(this.baseApi + this.prefijo);
  }
  deleteUsuarios(id: number): Observable<any>{
    return this.http.delete(this.baseApi + this.prefijo+id);
  }
  saveUsuarios(tarjeta: any):Observable<any>{
    return this.http.post(this.baseApi + this.prefijo,tarjeta)
  }
  updateUsuarios(id: number, tarjeta: any):Observable<any>{
    return this.http.put(this.baseApi+this.prefijo+id,tarjeta)
  }
  
}
