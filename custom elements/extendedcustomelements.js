var htmlButtonPrototype = Object.create(HTMLButtonElement.prototype);

htmlButtonPrototype.createdCallback = function () {
    this.innerHTML = "PluralSight Button";
    this.value = "Default";
    this.style.color = "orange";
};

var PluralSightButton = document.registerElement('pluralsight-button', {
    prototype: htmlButtonPrototype,
    extends: 'button'
});