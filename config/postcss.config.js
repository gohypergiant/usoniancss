const path = require('path');
const ROOT = path.join(__dirname, '..');

module.exports = {
  autoprefixer: {
    browsers: 'last 2 versions'
  },
  input: path.join(ROOT, 'src/usonian.css'),
  output: path.join(ROOT, 'dist/usonian.css'),
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-remove-root',
    'postcss-discard-comments',
    'postcss-reporter'
  ]
}
