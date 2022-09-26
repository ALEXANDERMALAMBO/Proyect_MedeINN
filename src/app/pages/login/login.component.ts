import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../core/services/spinner/spinner.service';
import { AuthHelpersService } from '../../core/helpers/auth/auth-helpers.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { topcard, topcards } from '../../dashboard/dashboard-components/top-cards/top-cards-data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorLogin: string | null;
  constructor(private fb: FormBuilder,
    private _authHelpers: AuthHelpersService,
    private _spinner: SpinnerService,
    private _router: Router) {
    this.errorLogin = null;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {

  }
  loginSubmit(event: any) {
    this._spinner.show();
    this.errorLogin = null;
    if (this.loginForm.status == 'VALID') {
      let credentials = this.loginForm.value;
      this._authHelpers.login(credentials)
        .then((response: any) => {
          this._spinner.hide();
          if (response.status == 1) {
            this._router.navigate(['dashboard/home']);
          }
        })
        .catch((e) => {
          this._spinner.hide();
          this.errorLogin = 'Usuario o contraseña invalidos'
        })
    } else {
      this.errorLogin = 'Todos los campos son requeridos';
    }
  }
}


