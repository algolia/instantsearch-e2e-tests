const path = require('path');

module.exports = {
  /*
   * Use the Static Server Service to start serve demos to run our tests against
   * https://webdriver.io/docs/static-server-service.html
   * https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-static-server-service
   */
  services: [
    [
      'static-server',
      {
        folders: [
          {
            mount: '/',
            path: './website',
          },
          {
            mount: '/examples/e-commerce/*',
            path: './website/examples/e-commerce',
          },
        ],
        port: 5000,
      },
    ],
  ],
  /*
   * Set the static server, started above, as the base URL
   * Will be prepended to the `url` parameter of `browser.url()` calls
   * https://webdriver.io/docs/configurationfile.html
   * https://webdriver.io/docs/api/browser/url.html
   */
  baseUrl: 'http://localhost:5000',

  /*
   * Specify Test Files
   * Using absolute path to run test files from the package root
   * instead of the directory from which `wdio` was called
   * https://webdriver.io/docs/configurationfile.html
   */
  specs: [path.join(__dirname, 'specs/**/*.spec.ts')],

  /*
   * Level of logging verbosity
   * Can be: trace, debug, info, warn, error, silent
   * https://webdriver.io/docs/options.html#loglevel
   */
  logLevel: 'warn',
  /*
   * Default timeout for all waitForXXX commands
   * https://webdriver.io/docs/options.html#waitfortimeout
   */
  waitforTimeout: 10000,
  /*
   * Stop tests on first fail
   * https://webdriver.io/docs/options.html#bail
   */
  bail: 1,

  /*
   * Uses Jasmine as test framework
   * Since Jest is not supported by WebdriverIO yet we choose to use the Jasmine framework as it has a very close syntax
   * https://webdriver.io/docs/options.html#framework
   * https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-jasmine-framework
   */
  framework: 'jasmine',
  /*
   * Specific Jasmine related options
   * https://webdriver.io/docs/options.html#mochaopts-jasminenodeopts
   * https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-jasmine-framework#configuration
   */
  jasmineNodeOpts: {
    requires: [path.join(__dirname, 'tsregister')],
    defaultTimeoutInterval: 60000,
  },
  /*
   * List of reporters to use
   * https://webdriver.io/docs/options.html#reporters
   * https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-spec-reporter
   */
  reporters: ['spec'],

  /*
   * Hooks
   * https://webdriver.io/docs/options.html#hooks
   */
  before() {
    /*
     * Register helpers
     * https://webdriver.io/docs/customcommands.html
     */
    require('./helpers');
  },

  async beforeSuite() {
    if (!browser.isMobile) {
      await browser.maximizeWindow();
    }
  },
};
