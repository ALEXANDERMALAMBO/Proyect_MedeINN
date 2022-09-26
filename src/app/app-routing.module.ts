import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ConsultaEmpresaComponent } from './pages/agendamiento/consulta-empresa/consulta-empresa.component';
import { CronogramaSolicitudComponent } from './pages/agendamiento/cronograma-solicitud/cronograma-solicitud.component';
import { FormularioInscripcionComponent } from './pages/agendamiento/formulario-inscripcion/formulario-inscripcion.component';
import { JornadasComponent } from './pages/agendamiento/jornadas/jornadas.component';
import { PoliticaPrivacidadComponent } from './pages/agendamiento/politica-privacidad/politica-privacidad.component';
import { SolicitudesPersonasComponent } from './pages/agendamiento/solicitudes-personas/solicitudes-personas.component';
import { TerminosYCondicionesComponent } from './pages/agendamiento/terminos-y-condiciones/terminos-y-condiciones.component';
import { LoginComponent } from './pages/login/login.component';




export const Approutes: Routes = [
  {
    path: '',
    component:HeaderComponent,
    children:[
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'registro', redirectTo: '/agendamiento/terminos-y-condiciones', pathMatch: 'full' },
      { path: 'prueba', component:TerminosYCondicionesComponent },
      {
        path: 'login',
        component:LoginComponent
        // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'agendamiento',
        children:[
          {
            path: 'terminos-y-condiciones',
            component:TerminosYCondicionesComponent
          },
          {
            path: 'jornadas',
            component:JornadasComponent
          },
          {
            path: 'consultar',
            component:ConsultaEmpresaComponent
          },
          {
            path: 'inscripcion',
            component:FormularioInscripcionComponent
          },
          {
            path: 'politica-privacidad',
            component:PoliticaPrivacidadComponent
          },
          {
            path: 'solicitud-personas',
            component:SolicitudesPersonasComponent
          },
          {
            path: 'cronograma-solicitud',
            component:CronogramaSolicitudComponent
          }
        ]
      },
    ]
  },
  {
    path: 'dashboard',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
