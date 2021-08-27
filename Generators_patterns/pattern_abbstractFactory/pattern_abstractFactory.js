var ElectroEngine = /** @class */ (function () {
    function ElectroEngine() {
        this.name = 'electro-engine';
    }
    return ElectroEngine;
}());
var DieselEngine = /** @class */ (function () {
    function DieselEngine() {
        this.name = 'diesel-engine';
    }
    return DieselEngine;
}());
var ElectroCar = /** @class */ (function () {
    function ElectroCar(model, engine) {
        this.model = model;
        this.engine = engine;
    }
    return ElectroCar;
}());
var DieselCar = /** @class */ (function () {
    function DieselCar(model, engine) {
        this.model = model;
        this.engine = engine;
    }
    return DieselCar;
}());
var ElectroCarFactory = /** @class */ (function () {
    function ElectroCarFactory() {
    }
    ElectroCarFactory.prototype.createCar = function () {
        return new ElectroCar('electro-car', this.createEngine());
    };
    ElectroCarFactory.prototype.createEngine = function () {
        return new ElectroEngine();
    };
    return ElectroCarFactory;
}());
var DieselCarFactory = /** @class */ (function () {
    function DieselCarFactory() {
    }
    DieselCarFactory.prototype.createCar = function () {
        return new DieselCar('diesel-car', this.createEngine());
    };
    DieselCarFactory.prototype.createEngine = function () {
        return new DieselEngine();
    };
    return DieselCarFactory;
}());
var electroCarFactory = new ElectroCarFactory();
var electroCar1 = electroCarFactory.createCar().engine;
var electroCar2 = electroCarFactory.createCar();
console.log(electroCar2);
//# sourceMappingURL=pattern_abstractFactory.js.map