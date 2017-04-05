/* config-overrides.js */
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  const jsLoader = config.module.loaders[1];
  console.log(
    '\x1b[33m%s\x1b[0m ',
    'Webpack config modified to support antd-styles!'
  );
  //Modify jsLoader for antd framework
  jsLoader.query.plugins = [
    ['import', [{ libraryName: 'antd', style: 'css' }]],
  ];
  return config;
};
