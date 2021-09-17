# Angular Learning

Angular is a JavaScript framework used to develop Single-Page Web Application (SPA).

## Angular version

Angular releases new version almost every year. So, it can be confused with beginner to start learning Angular with the question - Which version of Angular should I learn? So, let clarify this question. These are all story in each version.

### Angular JS

- Angular JS was released in 2010 by the team of Google.
- It is also known as Angular 1 or Angular 1.x by some of the developers.
- Use model-view-controller (MVC) and model-view-ViewModel (MVVM) architectures

### Angular 2

- Released in 2016, Angular 2 is a revised version of AngularJS.
- Written in TypeScript and supports mobile wholly
- To write a code in Angular 2 you may use languages like ES5, ES6, or even TypeScript.
- Lightweight and helps in building web applications in HTML and JavaScript.

### Angular 4

- Released in March 2017 and is an upgraded version of Angular 2.
- Help in reducing the size of the engine, and aids in the speedy compilation.
- Supports up to Typescript 2.2 and the earlier version TypeScript 1.8

### Angular 5

- Released in November 2017.
- More focused on making Angular smaller in size but faster in performance
- Helps in creating more dynamic web applications with the help of a manufacture optimizer along with an array of features

### Angular 6

- Released in May 2018, Angular 6 is widely used in the industry because of an updated version of Angular CLI.
- Comes with an upgraded version of the Component Development Kit and Angular Material

### Angular 7

- Released in October 2018
- Focused more on the Ivy project wherein there were minute changes but very crucial for Angular Material and core Framework.

### Angular 8

- Released in May 2019, Angular 8 boasts of the Ivy compiler.
- Supports granted for the web workers, support for TypeScript 3.4, Angular Ivy, and much more.

### Angular 9

- Released around October and November 2019.
- New and efficient Ivy compiler and runtime, improved debugging, speedy testing, and much more.

### Angular 10

- Released on June 24, 2020.

### Angular 11

- Released on November 11, 2020

### Angular 12

- Released on May 12, 2021

### Reference

- [Which Version of Angular Should Beginner Learn in 2021?](https://www.cybersuccess.biz/angular-versions-for-beginners-in-2021/)

## Installation and setup

In this tutorial, Angular 12 will be considered to use in this project.

1. use npm to install Angular CLI

```
npm install -g @angular/cli
ng version
ng new my-app
```

2. Go to project and run the app

```
cd my-app
ng serve --open
```

3. Answer the question
   1. Would you like to add Angular routing - Y/N
   2. Which stylesheet format would you like to use - CSS/SCSS/Sass/Less

**Tip:** If you want to install Angular CLI in specific version, you can use `npm install -g @angular/cli@version` like `npm install -g @angular/cli@9.1.0`.

## Folder Structure

- main.ts - the first file that be run.
- .editorconfig - helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. EditorConfig format code like Prettier. Therefore, you can choose either Prettier or EditorConfig, or use both of it. The benefit is you don't need to change Prettier or ESLint config to match with specific project, EditorConfig will make every developer write the same code styles. [See more information on official website](https://editorconfig.org/).
- .browserslistrc - allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.
- app/polyfills.ts - make your application compatible for different browsers because you write mostly in ES6 which is not compatible with IE.
- karma.conf.js - karma is a test runner which provide testing environment to developers.

## Basics

Angular divides component into three parts: html, css, ts

```html
<!-- app.component.html -->
<!-- You can use properties from ts in html -->
<h1>Hello World! {{ title }}</h1>
```

## Components & Databinding

Angular project is composed of components. The component include html, css and ts file. Angular will create app component which is the root component.

```js
// app.component.ts
import { Component } from '@angular/core';

// render in index.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-learning';
}
```

You can create component in app folder and the folder name should be the same as component's name.

### Create your own component

You can create a new component and include in Angular app via add it in the app.module.ts file.

#### 1. Create component manually

```js
// example of a new component
// server.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  title = 'server';
}
```

```js
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  // add new component in declaration
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<h1>Hello World! {{ title }}</h1>
<hr />
<!-- Add server component -->
<app-server></app-server>
```

### 2. Create Component via CLI

You can also create component via Angular CLI as following:

```
ng generate component <component_name>
or
ng g c <component_name>
```

Angular will provide four files: html, css, ts and test, and update app.module.ts to import the generated component automatically.

## Directives

## Services & Dependency Injection

## Routing

## Observables

## Forms

## Pipes

## Data fetching

## Optimizations & NgModules

## Testing

## Deploy
