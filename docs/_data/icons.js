const { icons } = require('../../src/icons/data.json')

const sizes = [null, 28, 40, 60, 80, 100]

module.exports = Object.entries(icons).map(([symbol, icon]) => ({
  ...icon,
  symbol,
  outputPath: `/foundations/icons/${symbol}/index.html`,
  url: `/foundations/icons/${symbol}/`,
  code: `<div class="flex space-x-28">
  ${sizes
    .map(size => `<sfgov-icon symbol="${symbol}"${size ? ` height="${size}"` : ''}></sfgov-icon>`)
    .join('\n  ')
  }
</div>`
}))
