---
layout: base
pagination:
  data: icons
  size: 1
  alias: icon
permalink: "{{ icon.url }}"
---

## SVG

```html id="icon-{{ icon.symbol }}-svg" standalone="false"
{{ icon.svg | safe }}
```

## HTML

```html id="icon-{{ icon.symbol }}"
{{ icon.code | safe }}
```
