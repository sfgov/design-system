module.exports = options => {
  const {
    debug = false,
    fontFamilyWeightMap = { }
  } = options
  return {
    postcssPlugin: 'font-weight-map',
    AtRule: {
      'font-face': node => {
        let fontFamily
        let fontWeightMap
        node.walkDecls('font-family', decl => {
          const value = unquote(decl.value)
          const map = fontFamilyWeightMap[value]
          if (map instanceof Object) {
            fontFamily = value
            fontWeightMap = map
          }
        })
        if (fontWeightMap) {
          node.walkDecls('font-weight', decl => {
            const value = fontWeightMap[decl.value]
            if (value) {
              if (debug) {
                console.warn(
                  'replacing font-weight for "%s": %s → %s',
                  fontFamily,
                  decl.value,
                  value
                )
              }
              node.walkDecls('src', srcDecl => {
                const input = srcDecl.value
                const output = input.replace(
                  new RegExp(`\\b${decl.value}\\b`, 'g'),
                  value
                )
                if (debug) {
                  console.warn('src: "%s" → "%s"', input, output)
                }
                srcDecl.value = output
              })
            }
          })
        } else {
          // console.warn('no match:', node.toString())
        }
      }
    }
  }
}

module.exports.postcss = true

function unquote (str) {
  return str.replace(/^(['"])(.*)\1$/, '$2')
}
