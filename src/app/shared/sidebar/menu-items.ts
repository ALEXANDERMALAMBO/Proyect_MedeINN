import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [

 {
    path: '/dashboard/home',
    title: 'Informacion Proyecto',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/dashboard/component/tarjetacredito',
    title: 'Datos tiempo real',
    icon: 'bi bi-building',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/dashboard/component/graficalineal',
    title: 'Grafica Lineal',
    icon: 'bi bi-person-video3',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/dashboard/component/graficabarras',
    title: 'Grafica de Barras',
    icon: 'bi bi-calendar-check-fill',
    class: '',
    extralink: false,
    submenu: []
  },
  
  {
    path: '/dashboard/component/matrizgestion',
    title: 'Matriz de gestión',
    icon: 'bi bi-person-square',
    class: '',
    extralink: false,
    submenu: []
  }
  ,
  {
    path: '/dashboard/component/usuarios',
    title: 'Usuarios',
    icon: 'bi bi-person-square',
    class: '',
    extralink: false,
    submenu: []
  }

];
