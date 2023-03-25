const { useBabelRc, override, addWebpackResolve } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addWebpackResolve({
    fallback: {
      stream: require.resolve('stream-browserify'),
      path: require.resolve("path-browserify"),
    },
  })
);