import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './pages/login/login.component';




export const Approutes: Routes = [
  {
    path: '',
    component:HeaderComponent,
    children:[
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'registro', redirectTo: '/agendamiento/terminos-y-condiciones', pathMatch: 'full' },
      
      {
        path: 'login',
        component:LoginComponent
        // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
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
