# Questions on Closures

1. Write a sum method which will work properly when invoked using either syntax below.
    ```
    console.log( sum( 2, 3 ) );   // Outputs 5
    console.log( sum( 2 )( 3 ) );  // Outputs 5
    ```
    __Source__: https://www.toptal.com/javascript/interview-questions  


2. What is the output of this snippet of code?
    ```
    for( var i = 0; i < 5; i++ ) {
        setTimeout(function() {
            console.log( i );
        }, i * 1000);
    }
    ```
    a) What gets logged to the console and when?  
    b) Provide an implementation that will work as expected. (see also: section on scope)  
    __Source__: https://www.toptal.com/javascript/interview-questions  


3. Consider the following code snippet
    ```
    for( var i = 0; i < 5; i++ ) {
        var btn = document.createElement( 'button' );
        btn.appendChild( document.createTextNode( 'Button ' + i ) );
        btn.addEventListener( 'click', function() {
            console.log( i ); 
        });
        document.body.appendChild( btn );
    }
    ```
    a) What gets logged to the console when the user clicks on "Button 4" and why?  
    b) Provide an implementation that will work as expected. (see also: section on scope)  
    __Source__: https://www.toptal.com/javascript/interview-questions

4. Consider the following code snippet
    ```
    for( let i = 0; i < 5; i++ ) {
        var btn = document.createElement( 'button' );
        btn.appendChild( document.createTextNode( 'Button ' + i ) );
        btn.addEventListener( 'click', function() {
            console.log( i ); 
        });
        document.body.appendChild( btn );
    }
    ```
    a) What gets logged to the console when the user clicks on "Button 4" and why?