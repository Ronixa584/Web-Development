<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/CSS/IMAGES/CSS3.png" width="250px" />
</div>

# CSS CheatSheet

## CSS
- CSS provides a way to control the visual presentation of web pages, including aspects such as layout, colors, fonts, and other design elements.

## Ways to Insert CSS
1. External CSS
2. Internal CSS
3. Inline CSS

```css
<!-- Inline CSS -->
<h1 style="color: red;">Hello World</h1>

<!-- Internal CSS -->
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>

<!-- External CSS -->
<head>
  <link rel="stylesheet" href="mystyle.css">
</head>

```
## CSS Syntax
```css

selector {
  property: value;
}

```

## CSS Selectors
1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state)
4. Pseudo-elements selectors (select and style a part of an element)
5. Attribute selectors (select elements based on an attribute or attribute value)
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/CSS/IMAGES/css_selectors.png" width="800px" />
</div>

```css

/* Element Selector */
p {
  color: blue;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#logo {
  width: 200px;
}

/* Descendant Selector */
div p {
  font-size: 16px;
}

/* Child Selector */
ul > li {
  list-style-type: square;
}

/* Adjacent Sibling Selector */
h2 + p {
  margin-top: 10px;
}

/* Attribute Selector */
input[type="text"] {
  border: 1px solid gray;
}

/* Pseudo-class Selector */
a:hover {
  color: red;
}

/* Pseudo-element Selector */
p::first-line {
  font-weight: bold;
}

```

## CSS Comments 
```css

/* Write your comments here */

```

## CSS Colors
[COLOR FORMATIONS](https://htmlcolorcodes.com/ "Named link title")
```css

/* Hex code */
h1 {
  color: #ff0000;
}

/* RGB */
.heading {
  color: rgb(0, 255, 0);
}

/* HSL */
#title {
  color: hsl(240, 100%, 50%);
}
```

## CSS Background
```css

.eg {
  background-color: #F0F0F0; /* Sets the background color */
  background-image: url("image.jpg"); /* Specifies the background image */
  background-repeat: repeat-x; /* Controls how the background image is repeated */
  background-position: center top; /* Sets the starting position of the background image */
  background-size: cover; /* Sets the size of the background image */
  background-attachment: fixed; /* Determines if the background scrolls with the content or remains fixed */
  background-origin: content-box; /* Defines the starting position of the background image relative to its container */
  background-clip: padding-box; /* Specifies the area within an element to which the background is clipped */
}
```

## CSS Background Shorthand
```css

.eg {
  background: #F0F0F0 url("image.jpg") center top/repeat-x cover fixed content-box padding-box;
}

```

## CSS gradients 
- CSS gradients  allow you to smoothly transition between multiple colors or shades.
```css

/* Linear Gradient (goes down/up/left/right/diagonally)*/
.linear-gradient-example {
  background: linear-gradient(to bottom, #ff0000, #0000ff);
}

/* Radial Gradient (A radial gradient is defined by its center.)*/
.radial-gradient-example {
  background: radial-gradient(circle, #ff0000, #0000ff);
}

/* Conic Gradient */
.conic-gradient-example {
  background: conic-gradient(45deg, #ff0000, #0000ff);
}

```

## CSS Borders
```css

.eg {
  border-width: 1px; /* Sets the width of the border */
  border-style: solid; /* Specifies the style of the border */
  border-color: #000000; /* Sets the color of the border */
  border-radius: 5px; /* Defines the radius of the border corners */
}

.specific-eg {
  border-top: 1px solid #000000; /* Sets the border properties for the top side */
  border-right: 2px dashed #FF0000; /* Sets the border properties for the right side */
  border-bottom: 3px dotted #00FF00; /* Sets the border properties for the bottom side */
  border-left: 4px solid #0000FF; /* Sets the border properties for the left side */
}

.border-image-eg {
  border-image: url("border-image.png") 10 10 round; /* Specifies an image to be used as the border */
}

```
## CSS Rounded Borders
```css

.eg {
  border-radius: 10px; /* Sets a border radius of 10 pixels for all corners */
}

.specific-eg {
  border-radius: 10px 5px 20px 15px; /* Sets different border radius values for each corner */
  /* Top-left corner: 10px, Top-right corner: 5px, Bottom-right corner: 20px, Bottom-left corner: 15px */
}

```

## CSS Border Property Shorthand 
```css

.eg {
  border: 1px solid #000000; /* Shorthand for setting width, style, and color of the border */
  border-radius: 5px; /* Defines the radius of the border corners */
}

.specific-eg {
  border-width: 1px 2px 3px 4px; /* Sets the border widths for top, right, bottom, and left sides */
  border-style: solid dashed dotted solid; /* Sets the border styles for top, right, bottom, and left sides */
  border-color: #000000 #FF0000 #00FF00 #0000FF; /* Sets the border colors for top, right, bottom, and left sides */
}

.border-image-eg {
  border-image: url("border-image.png") 10 10 round; /* Specifies an image to be used as the border */
}

```

## CSS BOX MODEL
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/CSS/IMAGES/css_boxmodel.png" width="800px" />
</div>

```css
.box {
  /* Content box */
  width: 200px;
  height: 150px;
  /* Padding box */
  padding: 20px;
  /* Border box */
  border: 2px solid #000000;
  /* Margin box */
  margin: 10px 20px 15px 25px;
}
```

## CSS Outline Style
```css

.eg {
  outline-width: 2px; /* Sets the width of the outline */
  outline-style: dashed; /* Specifies the style of the outline */
  outline-color: #FF0000; /* Sets the color of the outline */
}

.another-eg {
  outline: 1px solid #000000; /* Shorthand for setting width, style, and color of the outline */
}

.specific-eg {
  outline-offset: 5px; /* Specifies the distance between the outline and the element */
}

```

## CSS Text
```css

.eg {
  color: #FF0000; /* Sets the color of the text to red */
  font-family: Arial, sans-serif; /* Specifies the font family as Arial or a generic sans-serif font */
  font-size: 16px; /* Sets the font size to 16 pixels */
  font-weight: bold; /* Makes the text bold */
  font-style: italic; /* Renders the text in italic style */
  text-decoration: underline; /* Underlines the text */
  text-align: center; /* Centers the text horizontally within its container */
  text-transform: uppercase; /* Transforms the text to uppercase */
  text-indent: 20px; /* Indents the first line of text by 20 pixels */
  line-height: 1.5; /* Sets the height of a line of text to 1.5 times the font size */
  letter-spacing: 2px; /* Adds 2 pixels of spacing between characters */
  word-spacing: 5px; /* Adds 5 pixels of spacing between words */
  white-space: nowrap; /* Prevents wrapping of text to the next line */
}

```

## CSS LINKS
```css

/* unvisited link */
a:link {
  color: blue;
}

/* visited link */
a:visited {
  color: purple;
}

/* mouse over link */
a:hover {
  color: red;
}

/* selected link */
a:active {
  color: green;
}

```

## CSS Display
- The main methods for achieving page layout in CSS all involve specifying values for the display property. 
- This property allows us to change the default way something displays.

```css
  
.eg {
  display: block; /* Renders the element as a block-level element */
}

.another-eg {
  display: inline; /* Renders the element as an inline-level element */
}

.flex-container {
  display: flex; /* Enables flex layout for the element's children */
}

.grid-container {
  display: grid; /* Enables grid layout for the element's children */
}

.inline-block-eg {
  display: inline-block; /* Renders the element as an inline-level block */
}

.table-eg {
  display: table; /* Renders the element as a table */
}

.table-cell-eg {
  display: table-cell; /* Renders the element as a table cell */
}

.table-row-eg {
  display: table-row; /* Renders the element as a table row */
}

.list-item-eg {
  display: list-item; /* Renders the element as a list item */
}

```

## CSS Position
```css

.eg {
  position: static; /* Default position value, elements are rendered in the normal document flow */
}

.absolute-eg {
  position: absolute; /* Positioned relative to its nearest positioned ancestor or the containing block */
  top: 50px; 
  left: 20px; 
}

.relative-eg {
  position: relative; /* Positioned relative to its normal position in the document flow(setting position relative to the current element or element which has position relative */
  top: 10px; 
  left: 5px; 
}

.fixed-eg {
  position: fixed; /* Positioned relative to the browser window and remains fixed even when scrolled */
  top: 0; 
  right: 0; 
}

.sticky-eg {
  position: sticky; /* Behaves like relative until a certain scroll threshold, then becomes fixed */
  top: 20px; 
}

```
## Position Absolute Simplified
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/CSS/IMAGES/css_absolute1.png" width="800px" />
</div>

<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/CSS/IMAGES/css_absolute2.png" width="800px" />
</div>

## LAYOUTS
1. Normal Flow.
   - The process begins as the boxes of individual elements are laid out in such a way that any padding, border, or margin they happen to have is added to their content. 
   - This is what we call the box model.

2. FLEX
   - We will discuss this in CSS FLEX.md

3. GRID
   - We will discuss this in CSS GRID.md

4. FLOAT
   - We use the float property, when we want next element on right or left of current element.
   - But,if we want the next element below (not on right or left), we will have to use the clear property.

```css

/* Set the positioning and formatting of content */
img {
  float: right | left | none | inherit;
}

/* Set the positioning and formatting of content */
img {
  clear: right | left | none | inherit;
}

```
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/CSS/IMAGES/css_float.png" width="800px" />
</div>

5. Positioning  
   - CSS Position i.e static,absolute,relative,fixed,sticky

6. Multiple-column layout  
   - The multiple-column layout specification provides you with a method for laying content out in columns, as you might see in a newspaper.
```css

.container {
  columns: 2; /* Specifies the number of columns */
  column-gap: 20px; /* Sets the gap between columns */
}

.container {
  column-rule: 1px solid #000000; /* Adds a rule (line) between columns */
}

```

## CSS 2D Transforms
```css

.element {
  /* Translate by 100px on x-axis and 50px on y-axis */
  transform: translate(100px, 50px);

  /* Rotate by 45 degrees */
  transform: rotate(45deg);

  /* Scale by 1.5 on x-axis and 2 on y-axis */
  transform: scale(1.5, 2);

  /* Skew by 10 degrees on x-axis and -5 degrees on y-axis */
  transform: skew(10deg, -5deg);

  /* Apply matrix transformation */
  transform: matrix(1, 0.5, -0.5, 1, 100, 100);

  /* Scale along the x-axis by 1.5 */
  transform: scaleX(1.5);

  /* Scale along the y-axis by 0.5 */
  transform: scaleY(0.5);

  /* Skew along the x-axis by 20 degrees */
  transform: skewX(20deg);

  /* Skew along the y-axis by -10 degrees */
  transform: skewY(-10deg);

  /* Set transform origin to 50% from left and 50% from top */
  transform-origin: 50% 50%;
}

```

## CSS 3D Transforms
```css

.element {
  /* Translate by 100px on x-axis and 50px on y-axis */
  transform: translate3d(100px, 50px, 0);

  /* Rotate by 45 degrees around the Z-axis */
  transform: rotateZ(45deg);

  /* Scale by 1.5 on x-axis, 2 on y-axis, and 0.5 on z-axis */
  transform: scale3d(1.5, 2, 0.5);

  /* Skew by 10 degrees on x-axis and -5 degrees on y-axis */
  transform: skew(10deg, -5deg);

  /* Apply matrix3d transformation */
  transform: matrix3d(1, 0.5, 0, 0, 0.5, 1, 0, 0, 0, 0, 1, 0, 100, 100, 0, 1);

  /* Rotate by 45 degrees around the X-axis */
  transform: rotateX(45deg);

  /* Rotate by 45 degrees around the Y-axis */
  transform: rotateY(45deg);

  /* Rotate by 45 degrees around the Z-axis */
  transform: rotateZ(45deg);

  /* Set transform origin to 50% from left and 50% from top */
  transform-origin: 50% 50%;
}

```

## CSS Transitions
```css

.element {
  /* Transition opacity property with a duration of 0.5s */
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;

  /* Transition width property with a duration of 1s */
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: ease;

  /* Transition background color property with a duration of 0.3s and a delay of 0.2s */
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0.2s;

  /* Transition transform property with a duration of 0.5s and a cubic-bezier timing function */
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
}

```

## CSS Transition Shorthand
```css

.element {
  /* Transition all properties with a duration of 0.3s */
  transition: all 0.3s ease;

  /* Transition opacity property with a duration of 0.5s */
  transition: opacity 0.5s ease;

  /* Transition width and height properties with a duration of 1s */
  transition: width 1s ease, height 1s ease;

  /* Transition background color property with a duration of 0.3s and a delay of 0.2s */
  transition: background-color 0.3s ease 0.2s;

  /* Transition transform property with a duration of 0.5s and a cubic-bezier timing function */
  transition: transform 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}

```

## CSS Animation
```css

@keyframes exampleAnimation {
  /* Animation keyframes with specified percentages */
  0% {
    /* CSS properties at the start of the animation */
    opacity: 0;
    transform: translateX(-100px);
  }
  50% {
    /* CSS properties at the halfway point of the animation */
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    /* CSS properties at the end of the animation */
    opacity: 0;
    transform: translateX(100px);
  }
}

.element {
  /* Name of the animation */
  animation-name: exampleAnimation;
  
  /* Duration of the animation */
  animation-duration: 2s;

  /* Timing function for the animation */
  animation-timing-function: ease;

  /* Delay before the animation starts */
  animation-delay: 0s;

  /* Number of times the animation should repeat */
  animation-iteration-count: infinite;

  /* Direction of the animation */
  animation-direction: normal;

  /* Specifies whether the animation should play in reverse on alternate cycles */
  animation-direction: alternate;

  /* Fill mode for the animation before and after execution */
  animation-fill-mode: forwards;

  /* Play state of the animation */
  animation-play-state: running;
}

```


## SOME IMPORATNT CSS CONCEPTS

### CSS z-index(learn after positionig)
- z-index only works on positioned elements
- When elements are positioned, they can overlap other elements.
- The z-index property specifies the stack order of an element
```css

img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;/*image will be placed behind if image made overlapping over another element*/
}

```

### CSS Overflow
```css

.container {
  width: 200px; /* Sets the width of the container */
  height: 200px; /* Sets the height of the container */
  overflow: auto; /* Adds scrollbars when content exceeds the container's dimensions */
}

.container {
  overflow-x: hidden; /* Hides horizontal overflow */
  overflow-y: scroll; /* Adds vertical scrollbars when content exceeds the container's height */
}

.container {
  overflow: visible; /* Content is not clipped and may extend beyond the container */
}

```

### CSS Align
#### Center Align Elements
- To horizontally center a block element (like div), use margin: auto;

#### Center Align Text
- To just center the text inside an element, use text-align: center;

#### Center an Image
- To center an image, set left and right margin to auto and make it into a block element

#### Left and Right Align - Using position
- One method for aligning elements is to use position: absolute;

#### Left and Right Align - Using float
- Another method for aligning elements is to use the float property

### CSS Shadows
```css

.box {
  /* Adds a shadow effect to the box element */
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.4);
}

h1 {
  /* Adds a shadow effect to the text within h1 element */
  text-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.4);
}

```

### CSS Navigation Bar
- Navigation Bar = List of Links
- Horizontal Navigation Bar
```css
  display: inline; /*By default, <li> elements are block elements. Here, we remove the line breaks before and after each list item, to display them on one line*/
```
- Vertical Navigation Bar
```css
  display: block; /*Displaying the links as block elements makes the whole link area clickable (not just the text), and it allows us to specify the width (and padding, margin, height, etc. if you want)*/
```

### CSS !important
```css

p {
  background-color: red !important;/*The !important rule in CSS is used to add more importance to a property/value than normal.*/
}

```

### CSS object-fit
```css

.element {
  /* Stretches the image to fill the container, disregarding aspect ratio */
  object-fit: fill;

  /* Scales the image to fit within the container while maintaining aspect ratio */
  object-fit: contain;

  /* Scales the image to cover the entire container while maintaining aspect ratio */
  object-fit: cover;

  /* Displays the image at its intrinsic size, regardless of container dimensions */
  object-fit: none;

  /* Scales the image down to fit within the container, considering aspect ratio */
  object-fit: scale-down;
}

```















