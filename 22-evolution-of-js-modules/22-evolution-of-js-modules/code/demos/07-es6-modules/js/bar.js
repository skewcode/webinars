import foo1 from './foo1.js';
import foo2 from './foo2.js';

console.log( 'bar called' );
console.log( foo1, foo2 );

function bar() {
    foo1();
    foo2();
};

export default bar;