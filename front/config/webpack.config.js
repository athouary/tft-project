const path = require('path')

const BUILD_FOLDER = 'lib'
const ENTRY_FILE = 'src/index.jsx'

module.exports = (env) => {
  const mode = env

  let config = {
    mode,
    entry: path.join(__dirname, '..', ENTRY_FILE),
    output: {
      path: path.join(__dirname, '..', BUILD_FOLDER),
      filename: 'user-interface.js',
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-transform-react-jsx',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-nullish-coalescing-operator',
              ],
              presets: ['@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 8192 },
            },
            { loader: 'img-loader' },
          ],
        },
        {
          test: /\.(mp3)$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.mjs', '.jsx', '.css'],
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
