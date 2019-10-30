# ridestyler.ui

ridestyler.ui is the CSS framework used by many of the RideStyler branded tools and apps. It is a fork off of [Spectre.css](https://github.com/picturepan2/spectre/tree/32a122385b3e78c532e770ff669798a2c8d36f66).

## Getting started

To use the framework you can either:

- Install this using NPM and use the included SCSS or
- Use the precompiled SCSS on our static CDN

### From CDN

To install from the CDN just add a reference to the CSS:

```html
<link rel="stylesheet" href="https://static.ridestyler.net/rs-ui/latest/rsui.min.css">
```

### From NPM

First install the package:

```sh
npm install --save Burkson/ridestyler.ui
```

Then import the library using SCSS:

```scss
@import "~ridestyler.ui"
```

## Compiling custom version

You can compile your custom version of ridestyler.ui. Read [the documentation](https://burkson.github.io/ridestyler.ui/getting-started/custom.html).

## Documentation and examples

See [the documentation](https://burkson.github.io/ridestyler.ui/elements).

## Browser support

ridestyler.ui uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers and [Normalize.css](https://necolas.github.io/normalize.css/) for CSS resets. It is designed for modern browsers. For best compatibility, these browsers are recommended:

- Chrome (LAST 4)
- Microsoft Edge (LAST 4)
- Firefox (EXTENDED SUPPORT RELEASE)
- Safari (LAST 4)
- Opera (LAST 4)
- Internet Explorer 10+

Some HTML5 and CSS3 features are not perfectly supported by Internet Explorer.
