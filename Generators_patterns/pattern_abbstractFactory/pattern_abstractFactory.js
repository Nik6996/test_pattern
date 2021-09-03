var ElectroEngine = /** @class */ (function () {
    function ElectroEngine() {
    }
    ElectroEngine.prototype.name = function () {
        return 'electro-engine';
    };
    return ElectroEngine;
}());
var DieselEngine = /** @class */ (function () {
    function DieselEngine() {
    }
    DieselEngine.prototype.name = function () {
        return 'diesel-engine';
    };
    return DieselEngine;
}());
var ElectroCar = /** @class */ (function () {
    function ElectroCar(model, engine) {
        this.model = model;
        this.engine = engine;
    }
    ElectroCar.prototype.setModel = function () {
        return this.model;
    };
    ElectroCar.prototype.setEngine = function () {
        return this.engine;
    };
    return ElectroCar;
}());
var DieselCar = /** @class */ (function () {
    function DieselCar(model, engine) {
        this.model = model;
        this.engine = engine;
    }
    DieselCar.prototype.setModel = function () {
        return this.model;
    };
    DieselCar.prototype.setEngine = function () {
        return this.engine;
    };
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