const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-starter-web-component/runtime.js',
    './dist/angular-starter-web-component/polyfills.js',
    './dist/angular-starter-web-component/scripts.js',
    './dist/angular-starter-web-component/main.js'
  ];

  await fs.ensureDir('demo');
  await concat(files, 'demo/angular-starter.js');
  await fs.copyFile('./dist/angular-starter-web-component/styles.css', 'demo/angular-starter.css');
})();
