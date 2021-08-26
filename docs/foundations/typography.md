---
title: Typography
specimens:
  default: The quick brown fox jumps over the lazy dog.
---

## Introduction
Our typeface is Rubik, which was designed by Hubert and Fischer in 2015 for
Google Fonts. It is an open-source typeface that comes in 5 weights with
Roman and Italic styles, and can be accessed for free through [Google
Fonts][rubik].

We are primarily using only 3 of Rubik’s weights: Light, Regular, and Semibold.

## Text styles
This set of standardized text styles should cover most needs, including
headings and body copy.

For some of the larger titles, there are special mobile styles that are sized
down so that text will still fit on a smaller screen.

### Bold
Rubik Bold is very wide and heavy, so we use Rubik Semibold as our “bold”
weight option. This is used in headers, but also any text that is `<strong>` or
`<b>`. Rubik Bold should not be used.

### Italic
We try to avoid Italic text on SF.gov. It is difficult to read, especially for
people with dyslexia or visual impairments. Try to differentiate your text
using color, size, spacing, or other treatments instead.

### Links
We primarily use underlines to indicate clickable links. If a link is included
in any of the text styles, it should be underlined. Note, color is also often
used to differentiate the link text.

### Monospace
Use rarely. Monospace can help separate code or labels from natural language
text (for instance in `<kbd>` for keyboard instructions). In the future,
another possible use is when proportionally spaced characters would cause
misalignment or jumping.

> <div class="font-mono">The quick brown fox jumps over the lazy dog.</div>

## Desktop text styles
These styles are used on larger screens.

### Page tiles
Use page titles to introduce and group sections of content. Ideally, page
titles should be nested, from [x-large](#x-large-title) to
[x-small](#x-small-title) sizes, but occasionally a title style is skipped for
a greater size difference. Use either [x-large](#x-large-title) title (pages
with color banner) or display [large](#large-title) (pages with no color
banner) to style the one-time page title (`<h1>`).

#### X-large title
> <div class="title-xl">{{ specimens.default }}</div>

#### Large title
> <div class="title-lg">{{ specimens.default }}</div>

#### Medium title
> <div class="title-md">{{ specimens.default }}</div>

#### Small title
> <div class="title-sm">{{ specimens.default }}</div>

#### X-small title
> <div class="title-xs">{{ specimens.default }}</div>

#### X-small title link
> <div class="title-xs"><a href="#">{{ specimens.default }}</a></div>

#### Display large
> <div class="display-lg">{{ specimens.default }}</div>

#### Display small
> <div class="display-sm">{{ specimens.default }}</div>

### Additional text styles

#### Big description
Use to draw attention to blocks of text, such as the page introduction
paragraph. This style is slightly larger in size and line height compared to
the regular body text style.

> <div class="big-desc">{{ specimens.default }}</div>

#### Body
Use for paragraph and list text. This style can be used in regular, bold and
link format.

> <div class="text-body">{{ specimens.default }}</div>

#### Small text
Use this style sparingly for text that is smaller than the regular body style
size, such as photo credits.

> <div class="text-small">{{ specimens.default }}</div>

### Mobile text styles
These styles follow the same guidelines as the desktop styles but are
smaller in size for use on smaller screens.


[google fonts]: https://fonts.google.com
[rubik]: https://fonts.google.com/specimen/Rubik
