# All components together

This is simple HTML site with all components created in other repositories.

This site can be run on any little server, for example `static-server`.
```
npm install -g static-server
static-server # in main folder of this repo
```

## Tests

Currently this example NOT WORKING on Safari, Edge, Opera and Firefox.
I added pollyfills to ```<head></head>```:
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/custom-elements-es5-adapter.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-loader.js"></script>
```

Thanks this, Vue example started working (Angular example must be comment) in Firefox and Edge, but Angular not.
For Angular example I have still error in console.

Firefox:
```
TypeError: r.createShadowRoot is not a function
```
Edge:
```
SCRIPT438: Object doesn't support property or method 'createShadowRoot'
```