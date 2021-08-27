---
title: Color
---

The diversity of color and the range of saturations is a reflection of the contrasts that make San Francisco a unique place. The color palette is a useful tool that helps construct an experience that is both accessible and distinctly San Francisco.

## Primary colors
These are the primary brand colors, often used for backgrounds or for general content. Blue does not have an L3 because there are a variety of different blues in use. Black is a very dark gray to subtly soften the extreme contrast.

:::swatches
- ::swatch[Dark Blue]{value="{{ tokens.colors.blue.dark }}"}
- ::swatch[Blue L2]{value="{{ tokens.colors.blue[2] }}"}
- ::swatch[Blue L1]{value="{{ tokens.colors.blue[1] }}"}
- ::swatch[Black]{value="{{ tokens.colors.black }}"}
- ::swatch[Dark grey]{value="{{ tokens.colors.grey.dark }}"}
- ::swatch[White]{value="{{ tokens.colors.white }}" class="border-1 border-solid border-black"}
:::

## Text colors
Text is typically:
- Slate L4 for most body text and headlines
- Slate L2 for additional information or subheads
- White for most body text and headlines on darker fields; contrast permitting.

:::swatches
- ::swatch[Slate L4]{value="{{ tokens.colors.slate[4] }}"}
- ::swatch[Slate L2]{value="{{ tokens.colors.slate[2] }}"}
- ::swatch[White]{value="{{ tokens.colors.white }}" class="border-1 border-solid border-black"}
:::

## Action color
Use bright blue for most links, buttons, and other actionable UI (such as accordions and form elements).

:::swatches
- ::swatch[Bright blue]{value="{{ tokens.colors.blue.bright }}"}
:::

## Secondary colors
The broader secondary palette is used for highlighting and differentiating content:

- Use L1 and L2 for blocks separating content areas.
- The L3 color is the base shade of each color. Use it for focusing attention, such as on a header.
- Use L4 sparingly for hover states or when a darker color must contrast with the L3 color.

### Slate blue
:::swatches
- ::swatch[L4]{value="{{ tokens.colors.slate[4] }}"}
- ::swatch[L3]{value="{{ tokens.colors.slate[3] }}"}
- ::swatch[L2]{value="{{ tokens.colors.slate[2] }}"}
- ::swatch[L1]{value="{{ tokens.colors.slate[1] }}"}
:::


### Green
:::swatches
- ::swatch[L4]{value="{{ tokens.colors.green[4] }}"}
- ::swatch[L3]{value="{{ tokens.colors.green[3] }}"}
- ::swatch[L2]{value="{{ tokens.colors.green[2] }}"}
- ::swatch[L1]{value="{{ tokens.colors.green[1] }}"}
:::

### Red
:::swatches
- ::swatch[L4]{value="{{ tokens.colors.red[4] }}"}
- ::swatch[L3]{value="{{ tokens.colors.red[3] }}"}
- ::swatch[L2]{value="{{ tokens.colors.red[2] }}"}
- ::swatch[L1]{value="{{ tokens.colors.red[1] }}"}
:::

### Purple
:::swatches
- ::swatch[L4]{value="{{ tokens.colors.purple[4] }}"}
- ::swatch[L3]{value="{{ tokens.colors.purple[3] }}"}
- ::swatch[L2]{value="{{ tokens.colors.purple[2] }}"}
- ::swatch[L1]{value="{{ tokens.colors.purple[1] }}"}
:::

### Yellow
:::swatches
- ::swatch[L4]{value="{{ tokens.colors.yellow[4] }}"}
- ::swatch[L3]{value="{{ tokens.colors.yellow[3] }}"}
- ::swatch[L2]{value="{{ tokens.colors.yellow[2] }}"}
- ::swatch[L1]{value="{{ tokens.colors.yellow[1] }}"}
:::

### Grey
:::swatches
- ::swatch[L4]{value="{{ tokens.colors.grey[4] }}"}
- ::swatch[L3]{value="{{ tokens.colors.grey[3] }}"}
- ::swatch[L2]{value="{{ tokens.colors.grey[2] }}"}
- ::swatch[L1]{value="{{ tokens.colors.grey[1] }}"}
:::

## Recommended colors
Depending on contrast ratios, different colors are recommended for plain text and for links on each background color.

### Text
Most text is either Slate L4 or White, depending on the background color. On white backgrounds, Slate L2 can also be used for creating hierarchy or denoting inactive text elements.

### Links
Action blue is used for links on White or L1 colors. On darker colors, Bright blue has insufficient contrast and only Slate L4 or White is available to use. Because this has no differentiation between link and plain text color, it is especially important to underline the link text.

## Contrast ratios
WCAG 2 requires a color ratio of 3:1 or higher for AA and 4.5:1 for AAA for large text.

We strive for a contrast ratio of 7:1 or higher. Except for where noted, the recommended combinations achieve this goal.

### Text on L3 backgrounds
While our recommended text colors on L3 shades have contrast ratios ranging from 4.53:1 to 16.16:1, we recommend avoiding body copy on L3 backgrounds. Large headlines and other bold text are acceptable as the size and thickness will increase readability.

### Links on white and L1 backgrounds
The Action blue link color passes WCAG 2 requirements for 4.51 for AA large text, and in large text cases also passes AAA.

### Links on L2 backgrounds
Bright blue on L2 backgrounds passes WCAG 2 AA large text requirements. However it is just barely passing, and we do not recommend using it. In this case, it is better to use Slate (which meets our goal of 7:1) and distinguish links using an underline.

## Colors for charts and maps
Our palette for maps and charts was created and tested to work best when combined to display data.

It is recommended that you stick to using these colors when displaying data in the many inventive and exciting ways you can do and not in general interface settings. Try to stick with the colors from the primary palette for that.

This palette was tested for contrast compliance and support across a range of color vision abilities.

Note: "Charts and Maps" is a general catch-all phrase for times when data is displayed graphically.

### Qualitative
The qualitative color palette could also be considered the primary color palette for charts and maps. More specifically, the qualitative palette is best used for instances where the data is about comparing categories. (e.x. Adoption rates of dogs, cats, and iguanas placed on a line chart.)
The first two colors, dark blue and orange, are the preferred color palette for the polygons/shapes in two-color data projects.
The four remaining colors can be used when a more extensive palette is needed, and they are in no particular order of preference.

:::swatches
- ::swatch[Dark Blue]{value="{{ tokens.colors.sequentialColors.darkBlue[7] }}"}
- ::swatch[Orange]{value="{{ tokens.colors.sequentialColors.orange[7] }}"}
- ::swatch[Teal]{value="{{ tokens.colors.sequentialColors.teal[7] }}"}
- ::swatch[Blue]{value="{{ tokens.colors.sequentialColors.blue[7] }}"}
- ::swatch[Purple]{value="{{ tokens.colors.sequentialColors.purple[7] }}"}
- ::swatch[Pink]{value="{{ tokens.colors.sequentialColors.pink[7] }}"}
:::

### Sequential
Creating a visualization where the data is numeric and goes from low to high is where the sequential palette shines. An excellent example of the use of the sequential palette would be to show population density.

Keep in mind that color has meaning, so when assigning the colors at either end of the palette, make sure that the values that they represent make sense. Using a bluer color for the cold end of a temperature range and the yellow-ish color at the warmer end of the temperature range would be an example of this.

The sequential palettes should always be used together and not individually in other settings.

#### Dark blue
:::swatches
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[7] }}"} 
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[4] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[3] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[2] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[1] }}"}
:::

#### Orange
:::swatches
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[7] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[4] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[3] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[2] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[1] }}"}
:::

#### Teal
:::swatches
- ::swatch{value="{{ tokens.colors.sequentialColors.teal[7] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.teal[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.teal[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.teal[4] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.teal[3] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.teal[2] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.teal[1] }}"}
:::

#### Blue
:::swatches
- ::swatch{value="{{ tokens.colors.sequentialColors.blue[7] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.blue[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.blue[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.blue[4] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.blue[3] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.blue[2] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.blue[1] }}"}
:::

#### Purple
:::swatches
- ::swatch{value="{{ tokens.colors.sequentialColors.purple[7] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.purple[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.purple[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.purple[4] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.purple[3] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.purple[2] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.purple[1] }}"}
:::

#### Pink
:::swatches
- ::swatch{value="{{ tokens.colors.sequentialColors.pink[7] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.pink[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.pink[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.pink[4] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.pink[3] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.pink[2] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.pink[1] }}"}
:::

### Divergent
When the numeric variable has a meaningful central value, like zero, then you can use the diverging palette.

#### Dark Blue
:::swatches
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[7] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.darkBlue[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.grey[0] }}" class="border-1 border-solid border-black"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[5] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[6] }}"}
- ::swatch{value="{{ tokens.colors.sequentialColors.orange[7] }}"}
:::

### Text colors
Colors for use when labeling the charts and maps are the two listed. The darker of the two (#212123) will be the primary color for use when display text, titles, labels, etc. Reserve the lighter color (#59595C) for secondary information.

:::swatches
- ::swatch[Primary Text]{value="{{ tokens.colors.black }}"}
- ::swatch[Secondary Text]{value="{{ tokens.colors.secondaryText }}"}
:::

### Usage

Here we will have examples of color for charts and map usage.