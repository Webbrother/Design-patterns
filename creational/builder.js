// Product
var $element = $('#abstract-factory');

// Abstract builder
function BorderBuilder($el) {
}

BorderBuilder.prototype.setElement = function($el) {
    this._style = '';
    this._$el = $el;
    return this;
};

BorderBuilder.prototype.setWidth = function(width) {
    this._style += ' ' + width;
    return this;
};

BorderBuilder.prototype.setColor = function(color) {
    this._style += ' ' + color;
    return this;
};

BorderBuilder.prototype.setLineStyle = function(lineStyle) {
    this._style += ' ' + lineStyle;
    return this;
};

BorderBuilder.prototype.apply = function(lineStyle) {
    this._$el.css('border', this._style);
    this._style += ' ' + lineStyle;
    return this;
};

// Concrete builder
function BeautifulBorderBuilder($el) {
    this._$el = $el;
    this.buildWidth = function() {this.setWidth('1px')};
    this.buildColor = function() {this.setColor('grey')};
    this.buildLineStyle = function() {this.setLineStyle('dotted')};
}

BeautifulBorderBuilder.prototype = new BorderBuilder();

function AwfulBorderBuilder($el) {
    this._$el = $el;
    this.buildWidth = function() {this.setWidth('4px')};
    this.buildColor = function() {this.setColor('red')};
    this.buildLineStyle = function() {this.setLineStyle('solid')};
}

AwfulBorderBuilder.prototype = new BorderBuilder();

function Director($el, builder) {

    this.build = function() {
        builder.setElement($el);
        builder.buildWidth();
        builder.buildColor();
        builder.buildLineStyle();
    };

    this.apply = function() {
        builder.apply();
    };
}
var beautifulBorderBuilder = new BeautifulBorderBuilder();
var awfulBorderBuilder = new AwfulBorderBuilder();

var director1 = new Director($element, beautifulBorderBuilder);
var director2 = new Director($element, awfulBorderBuilder );

function client1() {
    director1.build();
    director1.apply();
}

function client2() {
    director2.build();
    director2.apply();
}