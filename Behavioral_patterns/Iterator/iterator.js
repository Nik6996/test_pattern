var MyIterator = /** @class */ (function () {
    function MyIterator(items) {
        this.items = items;
        this.index = 0;
    }
    MyIterator.prototype.next = function () {
        return this.items[this.index++];
    };
    MyIterator.prototype.hasNext = function () {
        return this.index < this.items.length;
    };
    return MyIterator;
}());
var collection = new MyIterator(['a', 'b', 'c', 'd']);
while (collection.hasNext()) {
    console.log(collection.next());
}
//# sourceMappingURL=iterator.js.map