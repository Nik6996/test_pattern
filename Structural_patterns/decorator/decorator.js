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
    FordCar.prototype.carName = function () {
        return 'Ford';
    };
    FordCar.prototype.carPrice = function () {
        return 2000;
    };
    return FordCar;
}());
var Decorator = /** @class */ (function () {
    function Decorator(car) {
        this.car = car;
    }
    Decorator.prototype.carName = function () {
        return this.car.carName();
    };
    Decorator.prototype.carPrice = function () {
        return this.car.carPrice();
    };
    return Decorator;
}());
var Parktronic = /** @class */ (function (_super) {
    __extends(Parktronic, _super);
    function Parktronic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parktronic.prototype.carName = function () {
        return "\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C " + _super.prototype.carName.call(this) + " \u0441 \u043F\u0430\u0440\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u043E\u043C";
    };
    Parktronic.prototype.carPrice = function () {
        return this.car.carPrice() + 1000;
    };
    return Parktronic;
}(Decorator));
function client(car) {
    console.log(car.carName(), car.carPrice() + '$');
}
var ford = new FordCar();
var fordParktronic = new Parktronic(ford);
client(fordParktronic);
//# sourceMappingURL=decorator.js.map