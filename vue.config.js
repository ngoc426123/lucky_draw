module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Lucky Draw 1.0.0'
    }
  },
  publicPath: '',
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.output = {
        ...args[0].terserOptions.output,
        comments: false  // exclude all comments from output
      }
      return args
    })
  }
}