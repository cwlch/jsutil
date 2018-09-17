'use strict';

Element.prototype.isVisible = function() {

    const noStyle = document.defaultView.getComputedStyle || window.getComputedStyle;

    return (this.style.display === 'none' || this.style.visibility === 'hidden' || noStyle(this,null).display === 'none' || noStyle(this,null).visibility === 'hidden') ? false : true;
};