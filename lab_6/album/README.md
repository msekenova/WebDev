# Album

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



!   URL: /home - static markup page
!   URL: /about - static markup page
!   You should have CRUD (create / read / update / delete) operations for albums.
!   URL: /albums - a list of albums from this url. Each item should:
    have delete button with implementation
    be clickable, after selecting one of them, must be opened a detail page.
!   URL: /albums/:id - detail page of selected item (example). This page should contain:
    information about selected item
    editable input for changing album title and “Save” button
    “Return back” button
    “Photos” link which will redirect to photos page of selected album
    URL: /albums/:id/photos - photos page of selected album (example). This page will render all images in any format and will have a “Return back” button.
!   Root url: “”, must be redirect to: /home 
    Albums and photos must be fetched using HTTP module and must be passed to components through albums.service.ts and must be Observable
    Your components:
        Home Component
        About Component
        Albums Component
        Album Detail Component
        Album Photos Component

