import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { DocentesComponent } from './docentes/docentes.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import { MatrizGestionComponent } from './matriz-gestion/matriz-gestion.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { GraficalinealComponent } from './graficalineal/graficalineal.component';
import { GraficabarrasComponent } from './graficabarras/graficabarras.component';


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
        path: 'docentes',
        component: DocentesComponent
      },
      {
        path: 'jornadas',
        component: JornadasComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
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
      {
        path: 'graficabarras',
        component: GraficabarrasComponent
      },
    
    ]
  }
];
