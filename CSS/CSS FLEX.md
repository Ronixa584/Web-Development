
# CSS Flexbox
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/CSS/IMAGES/css_flexbox.png" width="800px" />
</div>
- flex is applied on parent elements.

## Flex container properties
### Display Property
```css
/* Set the container to a flexbox */
.container {
  display: flex;
}
```

### Flex Direction Property

```css
/* Set the main axis direction */
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### Flex Wrap Property

```css
/* Allow items to wrap */
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### Flex Flow Property

```css
/* Combine flex-direction and flex-wrap */
.container {
  flex-flow: row wrap;
}
```

### Justify Content Property

```css
/* Align items along the main axis i.e along width*/
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

### Align Items Property

```css
/* Align items along the cross axis i.e along height*/
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

### Align Content Property

```css
/* Align wrapped lines along the cross axis */
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### Gap Property

```css
/* Set the gap between flex items */
.container {
  gap: 10px;
}
```

## Flex item properties
### Order Property

```css
/* Change the order of flex items */
.item {
  order: 2;
}
```

### Flex Grow Property

```css
/* Allow an item to grow to fill available space */
.item {
  flex-grow: 1;
}
```

### Flex Shrink Property

```css
/* Allow an item to shrink to fit available space */
.item {
  flex-shrink: 1;
}
```

### Flex Basis Property

```css
/* Set the initial main size of an item */
.item {
  flex-basis: auto | 0 | 50%;
}
```

### Flex Property

```css
.item {
    flex: 3 5 500px; /* shorthand for flex-grow flex-shrink flex-basis  */
}
```

### Align Self Property

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```


## CSS Flex Responsive
- With help of CSS Media Queries,we can make page responsive
```css
.flex-container {
  display: flex;
  flex-direction: row;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}

```
