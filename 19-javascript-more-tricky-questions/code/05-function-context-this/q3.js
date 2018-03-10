var obj = {
    x: 1,
    getX: function () {
        return this.x;
    }
};

var globalGetX = obj.getX;

console.log( globalGetX() ); // undefined
console.log( obj.getX() ); // 1