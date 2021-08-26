const allowDangerousHtml = { allowDangerousHtml: true }

const presets = {
  transform: [
    require('remark-gfm'),
    { plugin: require('remark-behead'), options: { depth: 1 } },
    require('remark-slug'),
    require('./autolink-headings'),
    require('remark-highlight.js'),
    require('remark-directive'),
    require('./prose'),
    require('./directives')
  ],
  examples: [
    require('./code-example'),
    require('./code-example-frame')
  ],
  stringify: [
    { plugin: require('remark-rehype'), options: allowDangerousHtml },
    require('rehype-raw'),
    { plugin: require('rehype-stringify'), options: allowDangerousHtml }
  ]
}

module.exports = presets
