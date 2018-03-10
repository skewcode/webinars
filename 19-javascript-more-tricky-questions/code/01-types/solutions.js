// NaNs are not comparable
console.log( NaN !== NaN );


console.log( 0.1 + 0.2 );
console.log( 0.1 + 0.2 === 0.3 );
console.log( 0.3 - ( 0.1 + 0.2 ) < Number.EPSILON );

// falsy - false, "", 0, undefined, null
console.log( ( true + false ) > 2 + true ); // 1 + 0 > 2 + 1


console.log( 10 > 9 > 8 === true ); // false