var length = 10;

function fn() {
    console.log( this.length );
}

var obj = {
    length: 5,
    method: function( fn ) {
        fn(); // 10
        arguments[0](); // 2 // { 0: fn, 1: 1, length: 2 }
    }
};

obj.method( fn, 1 );