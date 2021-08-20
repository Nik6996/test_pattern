var BmwCar = /** @class */ (function () {
    function BmwCar(model, price, speed) {
        this.model = model;
        this.price = price;
        this.speed = speed;
    }
    return BmwCar;
}());
var VolvoCar = /** @class */ (function () {
    function VolvoCar(model, price, autoPilot) {
        this.model = model;
        this.price = price;
        this.autoPilot = autoPilot;
    }
    return VolvoCar;
}());
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.create = function (type) {
        if (type === 'X3')
            return new BmwCar(type, 5000, 200);
        if (type === 'W8')
            return new VolvoCar(type, 10000, true);
        if (type === 'X6')
            return new BmwCar(type, 20000, 350);
    };
    return CarFactory;
}());
var newBmw = new CarFactory();
var x5 = newBmw.create('X6');
console.log(x5);
var newVolvo = new CarFactory();
var w8 = newVolvo.create('W8');
console.log(w8);
//# sourceMappingURL=pattern_factory.js.map