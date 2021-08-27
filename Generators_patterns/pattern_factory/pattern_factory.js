var BmwCar = /** @class */ (function () {
    function BmwCar(model, price, speed) {
        this.model = model;
        this.price = price;
        this.speed = speed;
    }
    return BmwCar;
}());
var SimpleCarFactory = /** @class */ (function () {
    function SimpleCarFactory() {
    }
    SimpleCarFactory.prototype.create = function (type) {
        if (type === 'X3')
            return new BmwCar(type, 5000, 200);
        if (type === 'X5')
            return new BmwCar(type, 20000, 350);
    };
    return SimpleCarFactory;
}());
var newBmw = new SimpleCarFactory();
var x5 = newBmw.create('X5');
console.log(x5);
var x3 = newBmw.create('X3');
console.log(x3.model);
//# sourceMappingURL=pattern_factory.js.map