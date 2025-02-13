const path = require('path');

const commonConfig = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  target: 'node',
};

const esmConfig = Object.assign({}, commonConfig, {
  output: {
    filename: 'index.mjs',
    path: path.resolve(__dirname, 'dist/mjs'),
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
});

const cjsConfig = Object.assign({}, commonConfig, {
  output: {
    filename: 'index.cjs',
    path: path.resolve(__dirname, 'dist/cjs'),
    library: {
      type: 'commonjs2',
    },
  },
});

const umdConfig = Object.assign({}, commonConfig, {
  output: {
    filename: 'index.umd.js',
    path: path.resolve(__dirname, 'dist/umd'),
    library: '@alonedev/dsa',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
});

module.exports = [esmConfig, cjsConfig, umdConfig];
