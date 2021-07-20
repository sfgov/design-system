const theme = require('./src/theme')

module.exports = {
  important: true,

  /*
   * This is essentially where we define all of the "tokens" that
   * Tailwind uses to generate CSS.
   *
   * See: <https://tailwindcss.com/docs/theme>
   */
  theme,

  /*
   * This is where we disable Tailwind's "core plugins", most of
   * which generate utility classes. There are a *lot* of these
   * turned on by default. Disabling them here saves us many
   * kilobytes in generated CSS.
   *
   * See: <https://tailwindcss.com/docs/configuration#core-plugins>
   */
  corePlugins: [
    'appearance',
    'alignContent',
    'alignItems',
    'backgroundColor',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'borderWidth',
    'cursor',
    'display',
    'flex',
    'flexShrink',
    'fontFamily',
    'fontSize',
    'fontSmoothing',
    'fontWeight',
    'height',
    'justifyContent',
    'justifyItems',
    'letterSpacing',
    'listStyleType',
    'padding',
    'margin',
    'maxWidth',
    'space',
    'textAlign',
    'textColor',
    'textDecoration',
    'verticalAlign',
    'whitespace',
    'width'
  ],

  /*
   * This is where we tell Tailwind which variants to make available
   * for each "core plugin". Most plugins get responsive variants out
   * of the box, but we can shrink the size of our CSS significantly
   * by turning off responsive variants for ones that we don't need
   * to change at different screen widths.
   *
   * See: <https://tailwindcss.com/docs/configuring-variants>
   */
  variants: {
    accessibility: ['responsive', 'focus', 'hocus'],
    appearance: [],
    backgroundColor: ['focus', 'hover', 'hocus'],
    borderColor: ['focus', 'hover', 'hocus'],
    borderWidth: ['hocus'],
    cursor: [],
    display: ['responsive'],
    fill: [],
    fontWeight: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: [],
    fontStyle: [],
    height: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStyleType: ['responsive'],
    listStylePosition: [],
    padding: ['responsive'],
    margin: ['responsive'],
    maxWidth: ['responsive'],
    space: ['responsive'],
    stroke: [],
    strokeWidth: [],
    textColor: ['focus', 'hover', 'hocus'],
    textDecoration: ['focus', 'hover', 'hocus'],
    userSelect: [],
    verticalAlign: ['responsive'],
    width: ['responsive']
  },

  plugins: [
    require('tailwindcss-interaction-variants')
  ]
}
