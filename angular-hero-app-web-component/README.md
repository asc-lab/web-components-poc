# Angular Elements - Hero App

This is a demo of Angular Elements that makes [Hero App from Angular Docs](https://angular.io/tutorial) as [Web Component](https://www.webcomponents.org/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

Actually, this solution have a lot of hurdles to production use - check section **Hurdles to Production Use** from [this article](https://www.telerik.com/blogs/getting-started-with-angular-elements).

## How it works
* in folder `demo` there is a simple HTML page to which Custom Element created by us has been added (check line 10,14,15)
* `elements-build.js` is custom npm script which combines the necessary files and moves them to the appropriate folder. This is needed because the current version of Angular CLI has no support to build Angular Elements.

## Run
```
npm install
npm install -g static-server
npm run build:elements
cd demo
static-server
```
Go to `http://localhost:9080` and show Angular Hero App as Custom Element in Action! ;)

## Resources
* [Custom Elements Demo](https://github.com/samjulien/elements-demo)
* [Getting Started with Angular Elements](https://www.telerik.com/blogs/getting-started-with-angular-elements)
* [Angular.io Tutorial: Tour of Heroes](https://angular.io/tutorial)
