var x = {
    a: 1,
    getA: function() {
        return this.a;
    }
};

var z1 = {
    foo1: function() {
        console.log( 'foo1 method' );
    }
};


var z2 = {
    foo2: function() {
        console.log( 'foo2 method' );
    }
};

var y = Object.create( x );
y.getA();

// we copy methods and properties from z1 and z2 into y
for( var prop in z1 ) {
    if( z1.hasOwnProperty( prop ) ) {
        y[prop] = z1[prop];
    }
}

for( var prop in z2 ) {
    if( z2.hasOwnProperty( prop ) ) {
        y[prop] = z2[prop];
    }
}

y.foo1();
y.foo2();

