function getDebouncedHandler( fn, interval ) {
    var lastCalled;

    return function() {
        if( lastCalled === undefined ) {
            console.log( 'inside undefined : ', lastCalled );
            layoutChange();
            lastCalled = (new Date()).getMilliseconds();
        } else {
            var currentCalled = (new Date()).getMilliseconds();
            console.log( currentCalled - lastCalled );
            if( currentCalled - lastCalled > interval ) {
                layoutChange();
            }
            lastCalled = currentCalled;
        }
    };
}

function layoutChange() {
    console.log( 'layout changes can be done now' );
    // your code to do this will go in here...
}

window.onresize = getDebouncedHandler( fn, 1000 );