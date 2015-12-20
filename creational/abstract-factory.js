/*
* Abstract factory
* */

function AbstractFactory() {
    // interface without implementation
}

AbstractFactory.prototype.createButton = function() {
    this.button = new this.ButtonClass();
    // abstract
};

AbstractFactory.prototype.createLegend = function() {
    this.legend = new this.LegendClass();
    // abstract
};

AbstractFactory.prototype.create = function() {
    $container.empty();
    this.createButton();
    this.createLegend();
};

/*
* Concrete products
* */

function DesktopButton() {
    var button = $('<button>desktop Button</button>');
    $container.append(button);
    return button;
}

function MobileButton() {
    var button = $('<button>mobile Button</button>');
    $container.append(button);
    return button;
}

function DesktopLegend() {
    var legend = $('<h1>Desktop legend</h1>');
    $container.append(legend);
    return legend;
}

function MobileLegend() {
    var legend = $('<h3>Mobile legend</h3>');
    $container.append(legend);
    return legend;
}

/*
* Concrete factories
* */

function DesktopFactory() {
    this.ButtonClass = DesktopButton;
    this.LegendClass = DesktopLegend;
}

function MobileFactory() {
    this.ButtonClass = MobileButton;
    this.LegendClass = MobileLegend;
}

DesktopFactory.prototype = new AbstractFactory();

MobileFactory.prototype = new AbstractFactory();


function client(AbstractFactory) {
    var abstractFactory = new AbstractFactory();
    abstractFactory.create();
}

$container = $('#abstract-factory');
