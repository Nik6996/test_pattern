var BmwCar = /** @class */ (function () {
    function BmwCar(model, price, speed) {
        this.model = model;
        this.price = price;
        this.speed = speed;
    }
    return BmwCar;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.create = function (type) {
        if (type === 'X3')
            return new BmwCar(type, 5000, 200);
        if (type === 'X5')
            return new BmwCar(type, 20000, 350);
    };
    return CarFactory;
}());
var newBmw = new CarFactory();
var x5 = newBmw.create('X5');
console.log(x5);
var newBmw1 = new CarFactory();
var x3 = newBmw.create('X3');
console.log(x3);
//# sourceMappingURL=pattern_factory.js.map