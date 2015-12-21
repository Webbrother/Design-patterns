function CreateFromPrototype(prototype, obj) {
    obj.__proto__ = prototype;
    return obj;
}

obj = {one: 1};
proto = {two: 2};

CreateFromPrototype(proto, obj);

console.log('obj.two', obj.two);

/* Another example */

