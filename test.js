const fs = require('fs');
const path = require('path');
const test = require('ava');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');

const plugins = [
  postcssCustomMedia(),
  postcssCustomProperties(),
];

const paths = {
  components: path.resolve('modules', 'components'),
  elements: path.resolve('modules', 'elements'),
  generic: path.resolve('modules', 'generic'),
  objects: path.resolve('modules', 'objects'),
  utilities: path.resolve('modules', 'utilities'),
  settings: path.resolve('modules', 'settings'),
};

const contents = {
  components: fs.readFileSync(path.join(paths.components, 'index.css'), 'utf8'),
  elements: fs.readFileSync(path.join(paths.elements, 'index.css'), 'utf8'),
  generic: fs.readFileSync(path.join(paths.generic, 'index.css'), 'utf8'),
  objects: fs.readFileSync(path.join(paths.objects, 'index.css'), 'utf8'),
  utilities: fs.readFileSync(path.join(paths.utilities, 'index.css'), 'utf8'),
  settings: fs.readFileSync(path.join(paths.settings, 'index.css'), 'utf8'),
};

test('components compile', (t) => {
  t.notThrows(
    postcss(plugins.concat([
      postcssImport({
        root: paths.components,
      }),
    ]))
    .process(contents.components)
    .then(res => t.truthy(res.css))
  );
});

test('elements compile', (t) => {
  t.notThrows(
    postcss(plugins.concat([
      postcssImport({
        root: paths.elements,
      }),
    ]))
    .process(contents.elements)
    .then(res => t.truthy(res.css))
  );
});

test('generic compile', (t) => {
  t.notThrows(
    postcss(plugins.concat([
      postcssImport({
        root: paths.generic,
      }),
    ]))
    .process(contents.generic)
    .then(res => t.truthy(res.css))
  );
});

test('objects compile', (t) => {
  t.notThrows(
    postcss(plugins.concat([
      postcssImport({
        root: paths.objects,
      }),
    ]))
    .process(contents.objects)
    .then(res => t.truthy(res.css))
  );
});

test('utilities compile', (t) => {
  t.notThrows(
    postcss(plugins.concat([
      postcssImport({
        root: paths.utilities,
      }),
    ]))
    .process(contents.utilities)
    .then(res => t.truthy(res.css))
  );
});

test('settings compile', (t) => {
  t.notThrows(
    postcss(plugins.concat([
      postcssImport({
        root: paths.settings,
      }),
    ]))
    .process(contents.settings)
    .then(res => t.truthy(res.css))
  );
});
