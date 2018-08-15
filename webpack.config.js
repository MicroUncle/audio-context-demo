module.exports = function (env){
    return env === 'dev' ? require('./config/webpack.config.dev') : require('./config/webpack.config.prod.js')
}