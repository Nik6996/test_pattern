var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CreateCar = /** @class */ (function () {
    function CreateCar() {
    }
    CreateCar.prototype.buildCar = function () {
        this.wheels();
        this.color();
        this.brand();
        this.model();
        this.maxSpeed();
        this.autoPilot();
    };
    CreateCar.prototype.wheels = function () {
        console.log('4 колеса');
    };
    CreateCar.prototype.color = function () {
        console.log('черный');
    };
    CreateCar.prototype.brand = function () {
        console.log('Tesla');
    };
    CreateCar.prototype.autoPilot = function () { };
    ;
    return CreateCar;
}());
var TeslaCar1 = /** @class */ (function (_super) {
    __extends(TeslaCar1, _super);
    function TeslaCar1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeslaCar1.prototype.model = function () {
        console.log('S');
    };
    TeslaCar1.prototype.maxSpeed = function () {
        console.log('200км/ч');
    };
    return TeslaCar1;
}(CreateCar));
var TeslaCar2 = /** @class */ (function (_super) {
    __extends(TeslaCar2, _super);
    function TeslaCar2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeslaCar2.prototype.model = function () {
        console.log('X');
    };
    TeslaCar2.prototype.maxSpeed = function () {
        console.log('300км/ч');
    };
    TeslaCar2.prototype.autoPilot = function () {
        console.log('true');
    };
    return TeslaCar2;
}(CreateCar));
function createCar(car) {
    car.buildCar();
}
var tesla1 = createCar(new TeslaCar1());
console.log(tesla1);
// let tesla2 = createCar(new TeslaCar2());
// console.log(tesla2);
//# sourceMappingURL=template.js.map