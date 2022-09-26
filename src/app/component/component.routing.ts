import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { DocentesComponent } from './docentes/docentes.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { PlaneadorComponent } from './planeador/planeador.component';
import { FormularioEmpresaComponent } from './formulario-empresa/formulario-empresa.component';
import { FormularioDocenteComponent } from './formulario-docente/formulario-docente.component';
import { SolicitudesEmpresasComponent } from './solicitudes-empresas/solicitudes-empresas.component';
import { FormularioJornadasComponent } from './formulario-jornadas/formulario-jornadas.component';
import { FormularioInscritosComponent } from './formulario-inscritos/formulario-inscritos.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {FormularioUsuariosComponent} from './formulario-usuarios/formulario-usuarios.component';
import { MatrizGestionComponent } from './matriz-gestion/matriz-gestion.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { GraficalinealComponent } from './graficalineal/graficalineal.component';


export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'card',
        component: CardsComponent
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent
      },
      {
        path: 'badges',
        component: BadgeComponent
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent
      },
      {
        path: 'nav',
        component: NgbdnavBasicComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'empresas',
        component: EmpresasComponent
      },
      {
        path: 'formulario-empresas/:idAction/:idEmpresa',
        component: FormularioEmpresaComponent
      },
      {
        path: 'docentes',
        component: DocentesComponent
      },
      {
        path: 'formulario-docentes/:idAction/:idDocente',
        component: FormularioDocenteComponent
      },
      {
        path: 'jornadas',
        component: JornadasComponent
      },
      {
        path: 'formulario-jornadas/:idAction/:idJornada',
        component: FormularioJornadasComponent
      },
      {
        path: 'solicitudes',
        component: SolicitudesEmpresasComponent
      },
      {
        path: 'listado-inscritos',
        component: FormularioInscritosComponent
      },
      {
        path: 'planeador',
        component: PlaneadorComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'formulario-usuarios',
        component: FormularioUsuariosComponent
      },
      {
        path: 'formulario-usuarios/:idAction/:idUsuarios',
        component: FormularioUsuariosComponent
      },
      {
        path: 'matrizgestion',
        component: MatrizGestionComponent
      },{
        path: 'tarjetacredito',
        component: TarjetaCreditoComponent
      },
      {
        path: 'graficalineal',
        component: GraficalinealComponent
      },
    
    ]
  }
];
