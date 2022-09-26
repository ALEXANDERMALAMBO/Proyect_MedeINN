import { Injectable } from '@angular/core';
import { AuthHelpersService } from '../auth/auth-helpers.service';

@Injectable({
  providedIn: 'root'
})
export class AppHelpersService {

  constructor() { }

  public static procesarError(error: any) {
    console.error(error);
    // if(error.error.mensaje && error.error.mensaje=="Sesión no activa"){
    //   sessionStorage.removeItem(AuthHelpersService.STORAGE_USER_KEY);
    //   document.location.href = '/';
    // }
  }

  public getToken(): string {
    let _token = this.getItem("access_token");
    if (_token == null) return "";
    return JSON.parse(_token).access_token;
  }

  //Obtiene el item del storage
  public getItem(itemName: string): string | null {
    return sessionStorage.getItem(itemName);
  }
}
