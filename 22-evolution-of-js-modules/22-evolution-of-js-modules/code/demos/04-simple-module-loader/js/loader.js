var Loader = Loader || {};
Loader.modules = Loader.modules || {};

function define( moduleId, deps, moduleFactory ) {
    var args = [], count = 0, depUrl;

    // in case module script file has been fetched previusly and module defined
    if( moduleId in Loader.modules ) {
        return;
    }

    // in case module being defined has no dependencies...
    if( deps.length === 0 ) {
        if( !( moduleId in Loader.modules ) ) {
            Loader.modules[moduleId] = moduleFactory();
        }
        return;
    }

    // in case module being defined HAS dependencies...
    for( let i = 0; i < deps.length; i++ ) {

        // dependency has not been fetched previously - so we load the dependency dynamically
        if( !( deps[i] in Loader.modules ) ) {
            depUrl = Loader.baseUrl + deps[i];
            loadScript( depUrl, function() {
                args.push( Loader.modules[deps[i]] );
                count++;

                if( count === deps.length ) {
                    console.log( 'args = ', args );
                    Loader.modules[moduleId] = moduleFactory.apply( null, args );
                }
            });
        }
    }
}

function require( moduleId ) {
    return Loader.modules[moduleId];
}

/**
 * @param {string} src URL of script wrt to the HTML document where script will be included 
 * @param {function} cb The callback function to be called once script is fetched and executed (i.e. loaded)
 * 
 * Notes:
 * 1. Dynamically inserted scripts execute asynchronously in IE and WebKit (order of script execution can be other than order of script include in the page), but synchronously in Opera and pre-4 Firefox
 * 2. For old IE, script.onreadystatechange has to be set instead of script.onload, along with a check if script.readyState is "loaded" | "complete" 
 */
function loadScript( src, cb ) {
    var script = document.createElement( 'script' );
    
    script.type = 'text/javascript';
    script.onload = cb;
    script.src = src;

    document.body.appendChild( script );
};

(function() {
    var bootstrapScript = document.querySelector( 'script[data-main]' ).getAttribute( 'data-main' );
    
    var pathFragments = bootstrapScript.split( '/' );
    pathFragments.pop();
    Loader.baseUrl = pathFragments.join( '/' ) + '/';

    loadScript( bootstrapScript );
})();