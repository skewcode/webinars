# CSS Pre-processors
---

## Problems with using CSS
- CSS for a reasonable large app gets unmanageable and buggy
    - Repetition of colors of a theme, font sizes etc.
    - No reusable blocks - Not naturally suited for Don't Repeat Yourself (DRY) code 
    - Does not support calculations, making it hard to manage code for grids etc.
- CSS imports cause extra HTTP requests to fetch imported stylesheets
- Complex cascades make it difficult to figure out computed styles
    - We need to introduce portions into the selector (prefix) simply to scope the rules to certain elements on the page. Changes to page structure/classes/ids etc. can break the scoping portions of the selector.

## CSS Pre-processors
Sass and Less are 2 popular CSS pre-processors that address these issues. Hence code is more maintainable. They have more features than  CSS. Sass and Less code in processed in a build step and transpiled to CSS.

## Less
- A superset of CSS - Thus all CSS files are also valid Less files (.less extension)

### Installation
Less compiler can be installed via npm (node module), run in the browser (script include), or the compiler tool downloaded independently and run. Less compiler can also be called in node modules of Node.js projects, to obtain compiled CSS code. We will be installing the compiler via npm.

#### Via npm
Installation and usage
```
npm install -g less
lessc path/to/input.less path/to/output.css
```
Less comes with plugins that can further process output while running .less files through the compiler. In order to minify the CSS that is output, the clean-css plugin can be installed and used while compiling.
```
npm install -g less-plugin-clean-css
lessc --clean-css input.less output.min.css
```
<br />
#### Via browser
Client-side compilation is not meant for production.  
Script to include can be downloaded [here](https://raw.githubusercontent.com/less/less.js/v2.7.2/dist/less.min.js), [or via the GitHub repo for the Less project (use dist/ folder)](https://github.com/less/less.js/tree/3.x/dist)

In order to use in an HTML document, include the .less file this way, along with the less.min.js (or less.js) file.
```
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```
```
<script src="less.min.js" type="text/javascript"></script>
```

### Features
- Nesting in selectors
- Imports - help modularize code while maintaining benefits of a single file
- Variables
- Mixins
- Some other features
    - Namespace
    - Scoping
    - String Interpolation
    - Using JavaScript
    - Looping, branching

## Sass (Suntactically Awesome StyleSheets)
- A superset of CSS - Thus all CSS files are also valid Sass files (.scss extensions).  
__Note__: There is an older alternative Sass format with .sass extensions files - this is not a superset of CSS but has syntax similar to it.

### Installation
Sass compiler can be installed via npm (node module), or the compiler tool (like compass) downloaded independently and run. Sass compiler can also be called in node modules of Node.js projects, to obtain compiled CSS code. We will be installing the compiler via npm. We will also use nodemon in order to watch for changes to Sass files.
#### Via npm
Installation and usage
```
npm install -g node-sass nodemon
node-sass path/to/input.scss path/to/output.css”
```
We shall use npm scripts to run Sass and nodemon to watch for changes.

### Features
Similar to Less. Inheritance is specific to Sass.

## References
- Less:
    * [Less site](http://lesscss.org/)
    * [Online transpiler for Less](http://less2css.org/)
- Sass:
    * [Sass site](http://sass-lang.com/)
    * [Watch and compile Sass files with npm](https://medium.com/@brianhan/watch-compile-your-sass-with-npm-9ba2b878415b)
- Less vs Sass:
    * [https://www.keycdn.com/blog/sass-vs-less/](https://www.keycdn.com/blog/sass-vs-less/)
    *
- Alternatives
    * [PostCSS (along with plugins)](http://postcss.org/) 
    * [Stylus](http://stylus-lang.com/)
