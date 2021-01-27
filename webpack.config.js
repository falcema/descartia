const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

var testApp = {
    mode: 'production',
    entry: './descartia.js',
    output: {
      path: path.resolve(__dirname, 'docs/js'),
      library: 'Descartia',
      libraryTarget: 'umd',
      filename: 'descartia.js'
    },
    optimization:{
        minimize: false
    }
};

var prodApp = {
    mode: 'production',
    entry: './descartia.js',
    output: {
      library: 'Descartia',
      libraryTarget: 'umd',
      filename: 'descartia.js'
    },
    optimization:{
        minimize: false
    }
};

var prodAppMin = {
    mode: 'production',
    entry: './descartia.js',
    output: {
      library: 'Descartia',
      libraryTarget: 'umd',
      filename: 'descartia.min.js'
    },
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    }
};

module.exports = [testApp,prodApp,prodAppMin];
