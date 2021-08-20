var ProducerCar = /** @class */ (function () {
    function ProducerCar() {
    }
    ProducerCar.prototype.create = function (typeCar) {
        if (typeCar === 'family')
            return new FamilyCar().bmwX5;
        if (typeCar === 'sport')
            return new SportCar().bmwM4;
    };
    return ProducerCar;
}());
var SportCar = /** @class */ (function () {
    function SportCar() {
    }
    SportCar.prototype.bmwM4 = function () {
        return new BmwM4();
    };
    return SportCar;
}());
var FamilyCar = /** @class */ (function () {
    function FamilyCar() {
    }
    FamilyCar.prototype.bmwX5 = function () {
        return new BmwX5();
    };
    return FamilyCar;
}());
var BmwM4 = /** @class */ (function () {
    function BmwM4() {
    }
    BmwM4.prototype.info = function () {
        return 'Bmw sport car';
    };
    return BmwM4;
}());
var BmwX5 = /** @class */ (function () {
    function BmwX5() {
    }
    BmwX5.prototype.info = function () {
        return 'Bmw family car';
    };
    return BmwX5;
}());
var carTest1 = new ProducerCar();
var carTest2 = carTest1.create('sport');
var carTest3 = carTest1.create('family');
console.log(carTest2);
console.log(carTest3);
//# sourceMappingURL=pattern_abstractFactory.js.map