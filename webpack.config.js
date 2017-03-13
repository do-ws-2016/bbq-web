module.exports = function(webpackConfig, isDevelopment) {
  const jsLoader = webpackConfig.module.rules[2];

  //Modify jsLoader for antd framework
  jsLoader.options.plugins = [
    ['import', [{ libraryName: 'antd', style: 'css' }]],
  ];
  return webpackConfig;
};
