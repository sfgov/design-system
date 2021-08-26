const visit = require('unist-util-visit')
const toString = require('hast-util-to-html')
const h = require('hastscript')
const env = require('../eleventy/nunjucksEnv')
const { addClass } = require('./utils')

module.exports = function exampleFramePlugin () {
  return async (tree, file) => {
    return visit(tree, 'code', async (node, index, parent) => {
      const { id: nodeId, iframe } = node?.data || {}
      if (!iframe) {
        addClass(node, 'block rounded p-20 bg-grey-1')
        return visit.SKIP
      }

      const template = node.data.template || 'example.njk'
      const { hProperties, hChildren, ...data } = node.data
      const html = env.render(template, {
        node,
        ...data,
        id: `example--${nodeId}`,
        content: toString(
          h('pre', { className: 'hljs m-0' }, [
            h('code', hProperties, hChildren)
          ])
        )
      })
      parent.children.splice(index, 1, {
        type: 'html',
        value: html
      })
      return visit.SKIP
    })
  }
}
