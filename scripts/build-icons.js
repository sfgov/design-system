#!/usr/bin/env node
const { writeFileSync } = require('fs')
const { ensureDir } = require('fs-extra')
const { icons } = require('../src/icons/data.json')

const dir = 'dist/icons'

main()

async function main () {
  await ensureDir(dir)

  for (const [symbol, icon] of Object.entries(icons)) {
    if (icon.svg) {
      const path = `${dir}/${symbol}.svg`
      console.warn('writing:', path)
      writeFileSync(path, icon.svg, 'utf8')
    } else {
      console.warn('no SVG for symbol:', symbol, icon)
    }
  }
}
