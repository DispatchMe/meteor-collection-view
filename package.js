Package.describe({
  name: 'dispatch:collection-view',
  version: '1.0.1',
  summary: 'Create a collection view',
  git: 'https://github.com/DispatchMe/meteor-collection-view'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.use([
    'ecmascript',
    'mongo',
    'check'
  ]);

  api.addFiles([
    'lib/collection.view.js'
  ]);

  api.export('CollectionView');

});
