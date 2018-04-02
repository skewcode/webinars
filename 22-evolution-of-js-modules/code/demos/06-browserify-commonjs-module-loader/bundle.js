(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var foo1 = require( './foo1' );
var foo2 = require( './foo2' );

console.log( 'bar called' );
console.log( foo1, foo2 );

function bar() {
    foo1();
    foo2();
};

module.exports = bar;
},{"./foo1":2,"./foo2":3}],2:[function(require,module,exports){
console.log( 'foo1.js script executed' );

function foo1() {
    console.log( 'foo1 called' );
}

module.exports = foo1;
},{}],3:[function(require,module,exports){
console.log( 'foo2.js script executed' );

function foo2() {
    console.log( 'foo2 called' );
}

module.exports = foo2;
},{}],4:[function(require,module,exports){
var bar = require( './bar' );

bar();
},{"./bar":1}]},{},[4]);
