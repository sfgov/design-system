import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

import { main, browser } from './package.json'
// eslint-disable-next-line no-undef
const { NODE_ENV = 'development' } = process.env
const prod = NODE_ENV === 'production'

const commonPlugins = [
  resolve(),
  json(),
  babel(),
  prod ? terser() : null
].filter(Boolean)

export default [
  {
    input: 'src/js/sfds.js',
    plugins: [
      ...commonPlugins
    ],
    output: {
      file: browser,
      format: 'umd',
      name: 'sfgov',
      sourcemap: prod
    }
  },
  {
    input: 'src/js/sfds.js',
    plugins: [
      ...commonPlugins
    ],
    output: {
      file: main,
      format: 'cjs',
      sourcemap: prod
    }
  }
]
