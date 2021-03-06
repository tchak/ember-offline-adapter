/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-offline-adapter',

  options: {
    nodeAssets: {
      localforage: {
        import: [{
          path: 'dist/localforage.js',
          using: [{ transformation: 'amd', as: 'localforage' }]
        }]
      }
    }
  }
};
