const path = require('path')
const nodeExternals = require('webpack-node-externals')

const BUILD_FOLDER = 'lib'
const ENTRY_FILE = 'src/app.js'

module.exports = (env) => {
  const mode = env

  let config = {
    mode,
    entry: path.join(__dirname, '..', ENTRY_FILE),
    output: {
      path: path.join(__dirname, '..', BUILD_FOLDER),
      filename: 'server.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.m?js?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-nullish-coalescing-operator',
              ],
            },
          },
        },
        {
          test: /\.node$/,
          use: 'node-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.mjs'],
    },
  }

  if (mode === 'development') {
    config = {
      ...config,
      watch: true,
      devtool: 'cheap-eval-source-map',
    }
  }

  return config
}
