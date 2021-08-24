var Car1 = /** @class */ (function () {
    function Car1(wheels, engine, autoPilot) {
        if (wheels === void 0) { wheels = 4; }
        if (engine === void 0) { engine = 'V8'; }
        if (autoPilot === void 0) { autoPilot = false; }
        this.wheels = wheels;
        this.engine = engine;
        this.autoPilot = autoPilot;
    }
    return Car1;
}());
var BuilderCar = /** @class */ (function () {
    function BuilderCar() {
        this.car = new Car1();
    }
    BuilderCar.prototype.wheels = function (wheelNew) {
        return this.car.wheels = wheelNew;
    };
    BuilderCar.prototype.engine = function (engineNew) {
        return this.car.engine = engineNew;
    };
    BuilderCar.prototype.autoPilot = function (autoPilotNew) {
        return this.car.autoPilot = autoPilotNew;
    };
    BuilderCar.prototype.builder = function () {
        return this.car;
    };
    return BuilderCar;
}());
var testBuilder = new BuilderCar();
testBuilder.wheels(8);
testBuilder.engine('V8 Turbo');
testBuilder.autoPilot(true);
testBuilder.builder();
console.log(testBuilder.builder().autoPilot);
//# sourceMappingURL=pattern_builder.js.map