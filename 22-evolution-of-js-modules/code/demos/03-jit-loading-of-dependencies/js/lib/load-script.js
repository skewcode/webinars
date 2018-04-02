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