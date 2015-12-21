function MyClass() {
    this.one = 1;
    this.two = 2;
}

function Singleton(klass) {
    var obj = null;
    return function() {
        obj = obj ? obj : new klass();

        return obj;
    }
}

var singleton = new Singleton(MyClass);

var obj1 = singleton();
var obj2 = singleton();

console.log('obj1', obj1);
console.log('obj2', obj2);
console.log('obj1 === obj2', obj1 === obj2);
