import { icons } from './data.json'

const templates = {}

for (const [id, { aliases = [], svg }] of Object.entries(icons)) {
  const template = createElementTemplate(svg)
  templates[id] = template
  for (const alias of aliases) {
    templates[alias] = template
  }
}

const defaultProps = {
  height: 20
}

export function render (symbol, props = {}) {
  const { strict, ...rest } = props
  if (Object.prototype.hasOwnProperty.call(templates, symbol)) {
    const attrs = Object.assign({}, defaultProps, rest)
    const template = templates[symbol]
    return template(attrs)
  } else if (strict) {
    throw new Error(`No such sfgov icon: "${symbol}"`)
  } else {
    return ''
  }
}

const observedAttributes = ['symbol', 'width', 'height']

export class SFGovIcon extends window.HTMLElement {
  static get observedAttributes () {
    return observedAttributes
  }

  static get icons () {
    return icons
  }

  static get symbols () {
    return Object.keys(icons)
  }

  connectedCallback () {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'img')
    }
    this.render()
  }

  get symbol () {
    return this.getAttribute('symbol')
  }

  set symbol (value) {
    this.setAttribute('symbol', value)
  }

  attributeChangedCallback (...args) {
    this.render()
  }

  render () {
    const { props } = this
    const svg = render(this.symbol, props)
    if (svg) {
      if (this.__svg) {
        this.replaceChild(svg, this.__svg)
      } else {
        this.appendChild(svg)
      }
      this.__svg = svg
    }
  }

  get props () {
    const props = { }
    for (const attr of observedAttributes) {
      if (this.hasAttribute(attr)) {
        props[attr] = this.getAttribute(attr)
      }
    }
    return props
  }
}

function createElementTemplate (markup) {
  let template = document.createElement('div')
  template.innerHTML = markup
  template = template.firstElementChild
  return (attrs = {}) => {
    const clone = template.cloneNode(true)
    for (const [name, value] of Object.entries(attrs)) {
      clone.setAttribute(name, value)
    }
    return clone
  }
}
