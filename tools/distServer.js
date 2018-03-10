// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import {chalkProcessing} from './chalkConfig';
import historyApiFallback from 'connect-history-api-fallback';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: 'src/main/webapp'
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});
