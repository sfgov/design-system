const visit = require('unist-util-visit')
const { addClass } = require('./utils')

const classNames = {
  blockquote: 'border-0 border-l-1 border-solid border-grey-4 mx-0 pr-0 pl-16 py-8'
}

module.exports = options => {
  return (tree, file) => {
    visit(tree, Object.keys(classNames), (node, index, parent) => {
      addClass(node, classNames[node.type])
    })
  }
}
