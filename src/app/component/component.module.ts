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
import { DocentesComponent } from './docentes/docentes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { JornadasComponent } from './jornadas/jornadas.component';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatrizGestionComponent } from './matriz-gestion/matriz-gestion.component';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { GraficalinealComponent } from './graficalineal/graficalineal.component';
import { LineaComponent } from './Lineal/linea/linea.component';
import { NgChartsModule } from 'ng2-charts';
import { LineaHumedadComponent } from './Lineal/linea-humedad/linea-humedad.component';
import { LineaCalidadAireComponent } from './Lineal/linea-calidad-aire/linea-calidad-aire.component';
import { LineaBenzenoComponent } from './Lineal/linea-benzeno/linea-benzeno.component';
import { BtempComponent } from './Barras/btemp/btemp.component';
import { BHumComponent } from './Barras/bhum/bhum.component';
import { BAireComponent } from './Barras/baire/baire.component';
import { BBenComponent } from './Barras/bben/bben.component';
import { GraficabarrasComponent } from './graficabarras/graficabarras.component';
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
   
    DocentesComponent,
 
   
    JornadasComponent,
  
    
    UsuariosComponent,
    MatrizGestionComponent,
    TarjetaCreditoComponent,
    GraficalinealComponent,
    LineaComponent,
    LineaHumedadComponent,
    LineaCalidadAireComponent,
    LineaBenzenoComponent,
    BtempComponent,
    BHumComponent,
    BAireComponent,
    BBenComponent,
    GraficabarrasComponent,
   
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