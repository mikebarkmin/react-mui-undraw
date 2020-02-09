# Material UI Undraw

Most of the [undraw](https://undraw.co) illustrations are support (See src folder).

`npm install mui-undraw`

`import XReact from mui-undraw/lib/XReact`

## Name changes

Illustrations beginning with a number were converted for example from
3DModelling to X3DModelling. The Illustration React was converted to XReact.

## Theme

All illustrations make use of the material ui theme. By default they use the
primary color. You can change that by passing `color="secondary"` to use the
secondary color. For any other color just pass the hexcode to the color prop.

## Props

* color: "primary", "secondary", a hexcode or a html color name
* All other props will be spread to the root svg component

