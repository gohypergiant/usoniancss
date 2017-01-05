const fs = require('fs')
const path = require('path');
const test = require('ava');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');

const plugins = [
  postcssImport(),
  postcssCustomMedia(),
  postcssCustomProperties(),
];

const modules = {
  components: fs.readFileSync(path.resolve('modules', 'components', 'index.css'), 'utf8'),
  elements: fs.readFileSync(path.resolve('modules', 'elements', 'index.css'), 'utf8'),
  generic: fs.readFileSync(path.resolve('modules', 'generic', 'index.css'), 'utf8'),
  objects: fs.readFileSync(path.resolve('modules', 'objects', 'index.css'), 'utf8'),
  utilities: fs.readFileSync(path.resolve('modules', 'utilities', 'index.css'), 'utf8'),
  settings: fs.readFileSync(path.resolve('modules', 'settings', 'index.css'), 'utf8'),
};

test('components compile', t =>
  t.notThrows(
    postcss(plugins)
      .process(modules.components)
  )
);

// test('elements compile', t =>
//
// )
//
// test('generic compile', t =>
//
// )
//
// test('objects compile', t =>
//
// )
//
// test('utilities compile', t =>
//
// )
//
// test('settings compile', t =>
//
// )
