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
var FordCar = /** @class */ (function () {
    function FordCar() {
    }
    FordCar.prototype.getName = function () {
        return 'Ford';
    };
    FordCar.prototype.getPrice = function () {
        return 2000;
    };
    return FordCar;
}());
// -------------------------------------------------------------
var FordDecorator = /** @class */ (function (_super) {
    __extends(FordDecorator, _super);
    function FordDecorator(car) {
        var _this = _super.call(this) || this;
        _this.car = car;
        return _this;
    }
    FordDecorator.prototype.getName = function () {
        return this.car.getName();
    };
    FordDecorator.prototype.getPrice = function () {
        return this.car.getPrice();
    };
    return FordDecorator;
}(FordCar));
// -------------------------------------------------------------
var ParktronicDecorator = /** @class */ (function (_super) {
    __extends(ParktronicDecorator, _super);
    function ParktronicDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParktronicDecorator.prototype.getName = function () {
        return " " + _super.prototype.getName.call(this) + " \u0441 \u043F\u0430\u0440\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u043E\u043C";
    };
    ParktronicDecorator.prototype.getPrice = function () {
        return this.car.getPrice() + 500;
    };
    return ParktronicDecorator;
}(FordDecorator));
var AutopilotDecorator = /** @class */ (function (_super) {
    __extends(AutopilotDecorator, _super);
    function AutopilotDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutopilotDecorator.prototype.getName = function () {
        return _super.prototype.getName.call(this) + " \u0441 \u0430\u0432\u0442\u043E\u043F\u0438\u043B\u043E\u0442\u043E\u043C";
    };
    AutopilotDecorator.prototype.getPrice = function () {
        return this.car.getPrice() + 1000;
    };
    return AutopilotDecorator;
}(FordDecorator));
var FordFactory = /** @class */ (function () {
    function FordFactory() {
    }
    FordFactory.prototype.create = function (config) {
        var fordCar = new FordCar();
        if (!config) {
            return fordCar;
        }
        if (config.parktronic) {
            fordCar = new ParktronicDecorator(fordCar);
        }
        if (config.autopilot) {
            fordCar = new AutopilotDecorator(fordCar);
        }
        return fordCar;
    };
    return FordFactory;
}());
var createFordCar = function (car) {
    console.log("\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C " + car.getName() + " \u0435\u0433\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C " + car.getPrice());
};
var fordFactory = new FordFactory();
createFordCar(fordFactory.create({
    parktronic: true
}));
createFordCar(fordFactory.create({
    autopilot: true
}));
createFordCar(fordFactory.create({
    parktronic: true,
    autopilot: true
}));
//# sourceMappingURL=decorator.js.map