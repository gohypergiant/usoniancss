
# Usonian CSS Modules

Usonian CSS contains six individual modules that follow the ITCSS layer hierarchy:

![ITCSS Layers](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10152838/itcss-layers1.svg)

- [usoniancss-settings](settings/readme.md)
- [usoniancss-generic](generic/readme.md)
- [usoniancss-elements](elements/readme.md)
- [usoniancss-objects](objects/readme.md)
- [usoniancss-components](components/readme.md)
- [usoniancss-utilities](utilities/readme.md)

## Installing All Modules

```
$ npm i usoniancss-settings usoniancss-generic usoniancss-elements usoniancss-objects usoniancss-components usoniancss-utilities --save
```

## Setting Up Your Project

```CSS
/* Settings */
@import "usoniancss-settings";
/* Add application specific settings here */


/* Generic */
@import "usoniancss-generic";
/* Add application specific generics here */


/* Elements */
@import "usoniancss-elements";
/* Add application specific elements here */


/* Objects */
@import "usoniancss-objects";
/* Add application specific settings here */


/* Components */
@import "usoniancss-components";
/* Add application specific components here */


/* Utilities */
@import "usoniancss-utilities";
/* Add application specific utilities here */
```
