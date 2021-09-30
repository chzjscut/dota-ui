'use strict'
const utils = require('./utils')


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: false
  }),
  cssSourceMap: false,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
