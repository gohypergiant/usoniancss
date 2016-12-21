module.exports = {
  input: './index.css',
  output: './dist/usonian.css',
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-reporter'
  ],
  autoprefixer: {
    browsers: 'last 2 versions'
  },
  cssnano: {
    discardComments: {
      removeAll: true
    }
  }
}
