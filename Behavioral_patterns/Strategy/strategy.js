var StandartSort = /** @class */ (function () {
    function StandartSort() {
    }
    StandartSort.prototype.sort = function (data) {
        return data.sort();
    };
    return StandartSort;
}());
var ReverseSort = /** @class */ (function () {
    function ReverseSort() {
    }
    ReverseSort.prototype.sort = function (data) {
        return data.reverse();
    };
    return ReverseSort;
}());
var Sorter = /** @class */ (function () {
    function Sorter(sorter) {
        this.sorter = sorter;
    }
    Sorter.prototype.setSort = function (data) {
        this.sorter = data;
    };
    Sorter.prototype.sort = function () {
        var result = this.sorter.sort([1, 2, 3, 4, 5]);
        console.log(result);
    };
    return Sorter;
}());
var sorter = new Sorter(new StandartSort());
sorter.sort();
sorter.setSort(new ReverseSort());
sorter.sort();
//# sourceMappingURL=strategy.js.map