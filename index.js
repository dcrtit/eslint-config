module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true,
    'shared-node-browser': true,
    'worker': true,
    'serviceworker': true,
    'commonjs': true,
    'jquery': true,
    'mongo': true,
    'jasmine': true,
    'mocha': true,
    'es6': true
  },
  'extends': [
    './rules/basic',
    './rules/vue',
    './rules/nuxt',
    './rules/import',
    './rules/unicorn',
  ].map(require.resolve),
};
