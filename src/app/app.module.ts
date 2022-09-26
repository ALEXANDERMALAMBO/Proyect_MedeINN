import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, HashLocationStrategy, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FullComponent } from './layouts/full/full.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { TerminosYCondicionesComponent } from './pages/agendamiento/terminos-y-condiciones/terminos-y-condiciones.component';
import { JornadasComponent } from './pages/agendamiento/jornadas/jornadas.component';
import { ConsultaEmpresaComponent } from './pages/agendamiento/consulta-empresa/consulta-empresa.component';
import { PoliticaPrivacidadComponent } from './pages/agendamiento/politica-privacidad/politica-privacidad.component';
import { FormularioInscripcionComponent } from './pages/agendamiento/formulario-inscripcion/formulario-inscripcion.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent as SpinnerGeneralComponent } from './component/spinner/spinner.component';
import { ActionsDialogComponent } from './shared/actions-dialog/actions-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { SolicitudesPersonasComponent } from './pages/agendamiento/solicitudes-personas/solicitudes-personas.component';
import { CronogramaSolicitudComponent } from './pages/agendamiento/cronograma-solicitud/cronograma-solicitud.component';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { NgChartsModule } from 'ng2-charts';
import {  GraficalinealService} from './core/services/graficalineal/graficalineal.service';


//import { GraficalinealService } from 'app/core/services/graficalineal/graficalineal.service';


//import { TarjetaCreditoComponent } from './component/tarjeta-credito/tarjeta-credito.component';
//import { UsuariosComponent } from './usuarios/usuarios.component';








import { ToastrModule } from 'ngx-toastr';
//import { LineaComponent } from './component/linea/linea.component';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    TerminosYCondicionesComponent,
    JornadasComponent,
    ConsultaEmpresaComponent,
    PoliticaPrivacidadComponent,
    FormularioInscripcionComponent,
    SpinnerGeneralComponent,
    ActionsDialogComponent,
    SolicitudesPersonasComponent,
    CronogramaSolicitudComponent,

    
   // TarjetaCreditoComponent,
    //UsuariosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false, relativeLinkResolution: 'legacy' }),
    PerfectScrollbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    FullCalendarModule,
    ToastrModule.forRoot(),
    NgChartsModule,
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      // useClass: PathLocationStrategy,
      useClass: HashLocationStrategy,
      
      
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
