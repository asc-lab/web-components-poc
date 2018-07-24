const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-hero-app-web-component/runtime.js',
    './dist/angular-hero-app-web-component/polyfills.js',
    './dist/angular-hero-app-web-component/scripts.js',
    './dist/angular-hero-app-web-component/main.js'
  ];

  await fs.ensureDir('demo');

  await concat(files, 'demo/angular-hero-app.js');
  await fs.copyFile('./dist/angular-hero-app-web-component/styles.css', 'demo/angular-hero-app.css');
})();
