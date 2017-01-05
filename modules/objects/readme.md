# Usonian CSS Objects

Single-level styles for non-cosmetic and abstract design patterns.

## Intrinsic

A way to determine the size for an element without regard for its context. Useful for things like responsive iframe embeds. Defaults to a 1:1 aspect ratio.

**Example**

```HTML
<div class="o-Intrinsic">
  <iframe class="o-Intrinsic-content" />
</div>
```

**Available Classes**

```
.o-Intrinsic # Container component, isolates child content
.o-Intrinsic--4by3 # Orient container in a 4:3 aspect ratio
.o-Intrinsic--3by2 # Orient container in a 3:2 aspect ratio
.o-Intrinsic--16by9 # Orient container in a 16:9 aspect ratio
.o-Intrinsic--21by9 # Orient container in a 21:9 aspect ratio
.o-Intrinsic--3by1 # Orient container in a 3:1 aspect ratio
.o-Intrinsic-content # Inner child component
```

## Layout

Flexible object for keeping child components contained. Used in conjunction with `widths` utility to create grid systems.

**Example**

```HTML
<div class="o-Layout o-Layout--pack">
  <div class="o-Layout-item">Item 1</div>
  <div class="o-Layout-item">Item 2</div>
</div>
```

**Available Classes**

```
.o-Layout # Container component
.o-Layout-item # Inner child component
.o-Layout--pack # Layout with nowrap
.o-Layout--flush # Layout with no gutters
.o-Layout--tight # Layout with tight gutters
.o-Layout--loose # Layout with loose gutters
.o-Layout--reverse # Reverses layout of children
```

## Wrapper

Think of this as a container element for grids or other various Layouts.

**Example**

```HTML
<div class="o-Wrapper">
  <div class="o-Layout o-Layout--pack">
    <div class="o-Layout-item">Item 1</div>
    <div class="o-Layout-item">Item 2</div>
  </div>
</div>
```

**Available Classes**

```
.o-Wrapper
```
