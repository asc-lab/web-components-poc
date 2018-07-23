# Vue Web Components - TODO App

## Project setup
```
yarn install
```

## Compiles and hot-reloads for development
```
yarn run serve
```

## Compiles and minifies for production
```
yarn run build
```

## Build as Web Component
```
vue build --target wc --name vue-custom ./src/App.vue
```
* `--name` is component name
* `./src.App.vue` is path to component (more info in vue-cli docs)

Short version:
```
yarn build-wc
```

## Run demo
```
yarn global add static-server
cd dist && static-server -i demo.html
```

## Lints and fixes files
```
yarn run lint
```

## Resources
* [vue-cli docs about Web Components](https://cli.vuejs.org/guide/build-targets.html#async-web-component)