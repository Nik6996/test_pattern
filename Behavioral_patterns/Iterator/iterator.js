var Iterator = /** @class */ (function () {
    function Iterator(el) {
        this.index = 0;
        this.elements = el;
    }
    Iterator.prototype.next = function () {
        return this.elements[this.index++];
    };
    Iterator.prototype.hasNext = function () {
        return this.index < this.elements;
    };
    return Iterator;
}());
var collection = new Iterator([1, 2, 3, 4, 5]);
//# sourceMappingURL=iterator.js.map