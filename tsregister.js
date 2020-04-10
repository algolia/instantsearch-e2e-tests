const path = require('path');

/*
 * Register TypeScript to compile our `.ts` files
 * https://webdriver.io/docs/typescript.html
 */
require('ts-node').register({
  // Only transpile our files without typechecking them, it makes test
  // faster and exempts us from installing type definitions to run them
  transpileOnly: true,
  // Force `ts-node` to compile files in `node_modules` directory
  // (ignored by default), since our tests will be stored in it
  ignore: [],
  // Force `ts-node` to use the config file from the package root
  // instead of the directory from which `wdio` was called
  project: path.join(__dirname, './tsconfig.json'),
});
