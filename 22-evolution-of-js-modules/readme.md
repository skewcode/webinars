# Evolution of JavaScript Modules

## Module Pattern

### Revealing Module Pattern
Advantages
This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

Disadvantages
A disadvantage of the revealing module pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.
Public object members which refer to private variables are also subject to the no-patch rule notes above.

As a result of this, modules created with the Revealing Module pattern may be more fragile than those created with the original Module pattern, so care should be taken during usage.

Source:
1. https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
2. https://edspencer.net/2009/10/05/javascript-module-pattern-overused-dangerous-and-bloody-annoying/


## Module loaders
* Offer a way to define modules for your app very easily
* Ways to manage dependencies between modules
* May offer a way to load modules asynchronously

## References
1. [Loading scripts asynchronously](https://zinoui.com/blog/asynchronous-loading-external-javascript)
2. [Require.js](http://requirejs.org/)
3. [Browserify](http://browserify.org/)
4. [Why Web Modules](http://requirejs.org/docs/why.html)
5. [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](https://addyosmani.com/writing-modular-js/)
6. [ES6 Modules](http://exploringjs.com/es6/ch_modules.html)