const path = require('path');
const { override, fixBabelImports, addLessLoader, useBabelRc, addWebpackAlias, addBabelPlugins } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    ['@assets']: path.resolve(__dirname, 'src/assets'),
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@hooks']: path.resolve(__dirname, 'src/hooks'),
    ['@environments']: path.resolve(__dirname, 'src/environments'),
    ['@helpers']: path.resolve(__dirname, 'src/helpers'),
    ['@models']: path.resolve(__dirname, 'src/models'),
    ['@utilities']: path.resolve(__dirname, 'src/utilities'),
  }),
  ...addBabelPlugins('@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@heading-color': 'default',
        '@body-background': 'default',
      },
    },
  }),
);
