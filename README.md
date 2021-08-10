# Proto GOL
Este proyecto es un "prototipo inicial" generado a partir de Fuse Template, con algunos cambios menores detallados en [doc/CHANGE-LOG.md](https://github.com/ChristianRoig/ngStarter/blob/starter/doc/CHANGE-LOG.md)
 
Un detalle de los pasos para su generacion puede encontrase en [doc/STEPS.md](https://github.com/ChristianRoig/ngStarter/blob/starter/doc/STEPS.md)

NOTA: el output path se podria colocar en angular.json
 
## IDE Run (Run in Development server) with root path (/)
 
Ejecutar `ng serve` para correr en un servidor de desarrollo.
 
Y navegar a `http://localhost:4200/`.
 
La app se refresca automaticamente con cualquier cambio en los fuentes.
 
## IDE Run with subpath (/protoGOL)
 
Si vamos a desplegar la app en un servidor web (apache), es probable que no querramos que el proyecto corra en la raiz del sitio “/” sino en un subdirectorio, por ej. “/protoGOL”
 
Para simular la misma ejecución que en apache (desde el servidor de desarrollo) debemos usar:
 
`ng serve --serve-path /protoGOL/ --base-href /protoGOL/`
 
Y navegar a: `http://localhost:4200/protoGOL/`.
 
## Build (Apache)
Nota: como no se instala en la raíz del apache (En nuestro caso lo vamos a instalar en protoGOL, el mismo nombre de la app) vamos a ejecutar:
 
`ng build --prod --base-href /protoGOL/`
 
Nota: esto genera un carpeta protoGOL en dist que hay que colocar en htdocs de apache (o en static de protoGOL-API)

Nota: OJO, NO ejecutar con bash, sino con powershell o command
 
## Build-in (Tomcat)
Nota: vamos a hacer el build con path protoGOL y en la carpeta estatica de la app spring boot, vamos a ejecutar:
 
`ng build --prod --base-href /protoGOL/ --output-path ../protoGOL-API/src/main/resources/static`

Nota: esto genera un el sitio en la carpeta estatica de protoGOL-API
 
Nota: OJO, NO ejecutar con bash, sino con powershell o command

## Deploy en Apache
 
Copiar la carpeta protoGOL de dist dentro del htdocs de apache.
 
Y navegar a: `http://localhost/protoGOL/`.
 
## Buenas Practicas
Hacemos nuestra declaracion de buenas practicas en [doc/GOOD-PRACT.md](https://github.com/ChristianRoig/ngStarter/blob/starter/doc/GOOD-PRACT.md)
 
---
---
> (de aqui en adelante se muestra el Readme Original de Angular CLI)

## Fuse - Admin template and Starter project for Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
