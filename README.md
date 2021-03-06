# KOSMos Style Guide

A customized bootstrap theme for KOSMos front end applications and dashboards.

## Installation

### Requirements

1. The **Node.js** framework can be installed using a ditribution package for your specific OS, or can be downloaded 
from [https://nodejs.org/](https://nodejs.org/).
> We support version Node v17.4.0
2. The **npm** package manager.

```console
npm install -g npm
```

### Building the package

```console
cd /location/of/kosmos-styleguide
npm install
npm run css-compile
```

## Deployment in your project

### a) Existing bootstrap-based project

After running the script above, the folder `dist/` in the project directory contains the style sheets, javascript files and images (logos). Replace the `bootstrap.css` file in your project with `dist/css/kosmos-style.css` to adjust the style and color theme.

The default configuration is simplified and may not include all bootstrap classes used in your project. If this is the case, edit the file `scss/kosmos-style.scss` and uncomment the additional bootstrap functionality needed for your project. After that run:

```console
cd /location/of/kosmos-styleguide
npm run css-compile
```

### b) Starting a project from example template

The folder `example` contains example templates. These serve the combined function of:
- giving a demonstration of the KOSMoS style
- providing starting layouts for your front end application
- explaining the usage of the CSS classes in the HTML markup

For further instructions, refer to the official [Bootstrap 4.6 documentaion](https://getbootstrap.com/docs/4.6/getting-started/introduction/).

### c) Customize to your specification

If you wish to alter the styles, or if you want to adapt the style guide to a different framework, you will likely need to modify the scss code. **SASS** is a language extension of css that facilitates developing large projects.

* [SASS documentation](https://sass-lang.com/documentation)

The scss entry point is `scss/kosmos-style.scss`. However, you may want to start with `scss/_variables.scss`, as it contains most of the definitions, such as colors, fonts and sizes. You can alter and extend these variables to suit your needs. To recompile the stylesheets after modification, run:

```console
cd /location/of/kosmos-styleguide
npm run css-compile
```

This will also generate a `.map` file, which allows you to use the development tools of your browser to full advantage. You can auto-recompile after every modification of the source files using the watch command:

```console
cd /location/of/kosmos-styleguide
npm run css-watch
```

If you are using a different css framework (i.e. Material UI), locate the equivalent of the `_varibles.scss` in your framework. Rename and integrate the definitions from this style guide to achieve a similar look.

## Linting

To check all linting you can also execute the following command. This will also check the lockfile with `lockfile-lint`.

```console
npm run lint
```
