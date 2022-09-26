import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { EmpresasComponent } from './empresas/empresas.component';
import { DocentesComponent } from './docentes/docentes.component';
import { MatIconModule } from '@angular/material/icon';
import { FormularioEmpresaComponent } from './formulario-empresa/formulario-empresa.component';
import { MatCardModule } from '@angular/material/card';
import { FormularioDocenteComponent } from './formulario-docente/formulario-docente.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { FormularioJornadasComponent } from './formulario-jornadas/formulario-jornadas.component';
import { SolicitudesEmpresasComponent } from './solicitudes-empresas/solicitudes-empresas.component';
import { FormularioInscritosComponent } from './formulario-inscritos/formulario-inscritos.component';
import { PlaneadorComponent } from './planeador/planeador.component';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { MatrizGestionComponent } from './matriz-gestion/matriz-gestion.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { GraficalinealComponent } from './graficalineal/graficalineal.component';
import { LineaComponent } from './linea/linea.component';
import { NgChartsModule } from 'ng2-charts';
//import { GraficalinealService } from 'app/core/services/graficalineal/graficalineal.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    MatCardModule,
    FullCalendarModule,
    NgChartsModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    ButtonsComponent,
    CardsComponent,
    TableComponent,
    EmpresasComponent,
    DocentesComponent,
    FormularioEmpresaComponent,
    FormularioDocenteComponent,
    JornadasComponent,
    FormularioJornadasComponent,
    SolicitudesEmpresasComponent,
    FormularioInscritosComponent,
    PlaneadorComponent,
    UsuariosComponent,
    FormularioUsuariosComponent,
    MatrizGestionComponent,
    TarjetaCreditoComponent,
    GraficalinealComponent,
    LineaComponent,
   
  ]

})
export class ComponentsModule { }


// ,
// providers: [
//   {
//     provide: LocationStrategy,
//     // useClass: PathLocationStrategy,
//     useClass: HashLocationStrategy
//   },
//   {
//     provide: PERFECT_SCROLLBAR_CONFIG,
//     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
//   }
// ],