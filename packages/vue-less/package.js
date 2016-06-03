Package.describe({
  name: 'akryum:vue-less',
  version: '0.0.1',
  summary: 'Add less support for vue components',
  git: 'https://github.com/Akryum/meteor-vue-component',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "vue-component-less",
  use: [
    'ecmascript@0.4.3',
    'akryum:vue-component@0.0.3'
  ],
  sources: [
      'vue-less.js'
  ],
  npmDependencies: {
    'less': '2.7.1'
  }
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akryum:vue-less');
  api.mainModule('vue-less-tests.js');
});