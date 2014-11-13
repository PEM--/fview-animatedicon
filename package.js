Package.describe({
  name: 'pierreeric:fview-animatedicon',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('pierreeric:fview-animatedicon.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pierreeric:fview-animatedicon');
  api.addFiles('pierreeric:fview-animatedicon-tests.js');
});
