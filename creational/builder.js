function BorderBuilder($el) {
    this._$el = $el;
    this._style = '';
}

BorderBuilder.prototype.width = function(width) {
    this._style += ' ' + width;
    return this;
};

BorderBuilder.prototype.color = function(color) {
    this._style += ' ' + color;
    return this;
};

BorderBuilder.prototype.lineStyle = function(lineStyle) {
    this._style += ' ' + lineStyle;
    return this;
};

BorderBuilder.prototype.set = function(lineStyle) {
    this._$el.css('border', this._style);
    this._style += ' ' + lineStyle;
    return this;
};

function director(builder) {
    builder
        .width('3px')
        .color('yellow')
        .lineStyle('solid')
        .set();
}

var $element = $('#abstract-factory');

var borderBuilder = new BorderBuilder($element);

