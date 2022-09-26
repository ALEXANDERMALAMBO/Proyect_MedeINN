// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
  //urlApi:"http://localhost:8000/api",
  // http://186.31.162.25:129/agendamiento-digital-backend/public/api
export const environment = {
  production: false,
  // urlApi:"http://181.57.3.122:8000/api",
  urlApi:"https://peaceful-ridge-97258.herokuapp.com/api",
  //urlApi:"http://localhost:8000/api",
  //urlApi:"http://localhost/agendamiento-digital-backend/public/api",
  idCrear:1,
  idVer:2,
  idEditar:3
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
