function loadScript( src, cb ) {
    var script = document.createElement( 'script' );

    script.type = 'text/javascript';
    script.src = src;
    script.onload = cb;

    document.body.appendChild( script );
}