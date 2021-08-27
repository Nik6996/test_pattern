var BuilderCar = /** @class */ (function () {
    function BuilderCar() {
        this.wheels = 4;
        this.engine = 'V8';
        this.autoPilot = false;
    }
    BuilderCar.prototype.setWheels = function (wheels) {
        this.wheels = wheels;
        return this;
    };
    BuilderCar.prototype.setEngine = function (engine) {
        this.engine = engine;
        return this;
    };
    BuilderCar.prototype.setAutoPilot = function (autoPilot) {
        this.autoPilot = autoPilot;
        return this;
    };
    return BuilderCar;
}());
var Car1 = /** @class */ (function () {
    function Car1(carBuilder) {
        this.wheels = carBuilder.wheels;
        this.engine = carBuilder.engine;
        this.autoPilot = carBuilder.autoPilot;
    }
    return Car1;
}());
var audiCarBuilder = new BuilderCar().setWheels(6).setEngine('V12').setAutoPilot(true);
var audiCar1 = new Car1(audiCarBuilder);
audiCarBuilder.setAutoPilot(false);
var audiCar2 = new Car1(audiCarBuilder);
console.log(audiCar2);
//# sourceMappingURL=pattern_builder.js.map