/*
* Abstract product
*
* Живое существо
* */
function Creature() {
    // Abstract
}

Creature.prototype.speak = function() {
    var speach = this._speach;
    console.log(speach);
};

/*
* Concrete products
* */

function Man() {
    this._speach = 'Hello!';
}

function Dog() {
    this._speach = 'Woof woof!';
}

function Snake() {
    this._speach = 'Shhhhhh!'
}

Man.prototype = new Creature();
Dog.prototype = new Creature();
Snake.prototype = new Creature();

/* Factory
* */
function God() {
}
/* Factory method
* */

God.prototype.create = function(type) {

    var ProductClass;

    switch (type) {
        case 'man':
            ProductClass = Man;
            break;
        case 'dog':
            ProductClass = Dog;
            break;
        case 'snake':
            ProductClass = Snake;
            break;
    }

    return new ProductClass;
};

var god = new God();

god.create('man').speak();
god.create('dog').speak();
god.create('snake').speak();

/* Another example of factory method*/

var div = document.createElement('div');
var p = document.createElement('p');
var h1 = document.createElement('h1');