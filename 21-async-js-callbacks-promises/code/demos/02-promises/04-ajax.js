/**
 * Function to execute an HTTP GET Ajax request
 * 
 * url {string} URL to which Ajax call is to be made
 * cb {function} Callback function which is called when HTTP call resulted in successful response or failure. The callback is passed the error as first argument (or null if no error) and response as second argument - in case of error, the underlying XMLHttpRequest object is passed. The response is assumed to be in JSON format and is parsed and sent.
 */
function get( url, cb = () => {} ) {
    return new Promise(function( resolve, reject ) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener( 'readystatechange', function( event ) {
            if( xhr.readyState === 4 ) {
                if( xhr.status >= 200 && xhr.status < 300 ) {
                    cb( null, JSON.parse( xhr.responseText ) );
                    resolve( JSON.parse( xhr.responseText ) );
                } else {
                    var err = new Error( 'Error occured during HTTP request' );
                    cb( err, xhr );
                    reject( err );
                }
            }
        });

        xhr.open( 'GET', url, true );
        xhr.send();
    });
}