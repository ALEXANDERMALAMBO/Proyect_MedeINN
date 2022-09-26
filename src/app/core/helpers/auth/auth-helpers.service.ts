import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHelpersService {
  static readonly STORAGE_USER_KEY = 'user';
  static readonly STORAGE_TOKEN_KEY = 'access_token';
  constructor(private _authServices: AuthService) {

  }

  /**
* Método de Login de la aplicación
* @param userCredentials credenciales del usuario proveniente del formulario de login
* @returns Observable que retorna un objeto User
*/
  login(userCredentials: any) {
    return new Promise((resolve, reject) => {
      this._authServices.login(userCredentials)
        .subscribe((response: any) => {
          if (response.status == 1) {
            sessionStorage.setItem(
              AuthHelpersService.STORAGE_TOKEN_KEY,
              JSON.stringify({
                access_token: response.access_token,
              })
            );

            this._authServices.profile().subscribe((user: any) => {
              if(user.data){
                sessionStorage.setItem(
                  AuthHelpersService.STORAGE_USER_KEY,
                  JSON.stringify({
                    id: user.data.id,
                    name: user.data.name,
                    email: user.data.email,
                  })
                );
              }
            })
          }
          resolve(response);
        },
          (error) => {
            console.error(error); reject();
          });
    });
  }

  logout() {
    sessionStorage.removeItem(AuthHelpersService.STORAGE_USER_KEY);
    sessionStorage.removeItem(AuthHelpersService.STORAGE_TOKEN_KEY);
  }
}
