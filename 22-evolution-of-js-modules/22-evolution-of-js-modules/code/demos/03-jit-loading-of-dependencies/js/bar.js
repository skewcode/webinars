/**
 * Problems:
 * 1. The paths are wrt HTML document and not this JS file - this is BAD. Load index.html -> it works fine. Now load src/index.html -> it errors out.
 * 2. Scripts are loaded asynchronously - load index.html a few times and you may see foo1.js and foo2.js being executed out-of-order (it is possible foo2.js executes before foo1.js)
 * 3. A script may have multiple dependencies. In such cases, all dependencies have to be loaded before the script can execute - implementing logic that makes sure a callback is called after ALL dependencies load is very difficult.
 */
function bar() {
    console.log( 'bar called' );

    console.log( 'before calls to loadScript' );

    loadScript( 'js/foo1.js', function() {
        // foo1.js has been loaded and executed - we can make use of definitions in there now
        foo1();
    });
    
    loadScript( 'js/foo2.js', function() {
        // foo2.js has been loaded and executed - we can make use of definitions in there now
        foo2();
    });
    
    console.log( 'after calls to loadScript' );
}

bar();