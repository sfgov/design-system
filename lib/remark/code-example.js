const visit = require('unist-util-visit')
const pkg = require('../../package.json')
const site = require('../../docs/_data/site')
const { getNearestHeading, parseMeta } = require('./utils')

const unpkgBaseURL = `https://unpkg.com/${pkg.name}@${pkg.version}`
const exampleFooter = `

<!-- feel free to remove this footer -->
<a class="mt-100 block text-mono text-grey-4 p-8" href="${unpkgBaseURL}/" >${pkg.name}@${pkg.version}</a>`

module.exports = function codeExamplePlugin () {
  const resizeHandler = 'this.style.height = this.contentDocument.documentElement.offsetHeight + "px"'
  return (tree, file) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'html') {
        console.warn('non-html code block:', node.lang)
        return
      }

      const heading = getNearestHeading(node, parent)
      const meta = parseMeta(node.meta)
      const id = meta.id || heading?.data?.hProperties?.id
      if (!id) {
        console.warn('unable to determine id for code block in %s:', file.path, node)
        return
      } else if (meta.static === 'true') {
        return
      }

      const nodeId = `code--${id}`
      const data = node.data || (node.data = {})
      const props = data.hProperties || (node.data.hProperties = {})
      props.id = nodeId

      const url = `/examples/${id}.html`
      const title = meta.title || heading?.children[0]?.value
      const code = node.value
      Object.assign(node.data, {
        id,
        title,
        url,
        meta,
        source: {
          path: `/${file.path}`,
          location: node.location,
          url: String(file.path)
            .replace(/docs/, '')
            .replace(/\.md$/, `/#${id}`)
        },
        codepen: {
          title: `${site.title}: ${title}`,
          html: `${code}${exampleFooter}`,
          editors: '100',
          js_external: `${unpkgBaseURL}/dist/js/sfds.js`,
          css_external: [
            `${unpkgBaseURL}/dist/css/sfds.css`,
            `${unpkgBaseURL}/dist/css/fonts.css`
          ].join(';')
        },
        iframe: {
          properties: {
            src: url,
            style: 'overflow-y: auto',
            scrolling: 'no',
            onload: resizeHandler,
            onresize: resizeHandler
          }
        }
      })
    })
  }
}
