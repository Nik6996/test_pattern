var Flyweight = /** @class */ (function () {
    function Flyweight(state) {
        this.state = state;
    }
    Flyweight.prototype.create = function (uniqueState) {
        var a = this.state;
        var b = uniqueState;
        console.log(a, b);
    };
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory(initialFlyweights) {
    }
    return FlyweightFactory;
}());
//# sourceMappingURL=flyweight.js.map