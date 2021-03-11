const frontWebpackConfig = require('./front/config/webpack.config')
const backWebpackConfig = require('./back/config/webpack.config')
module.exports = [frontWebpackConfig, backWebpackConfig]
