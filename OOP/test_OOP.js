//=========================НАСЛЕДОВАНИЕ=============
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
var Tesla = /** @class */ (function () {
    function Tesla(myModel, myPrice, myWheel, myAutoPilot) {
        this.model = myModel;
        this.price = myPrice;
        this.wheel = myWheel;
        this.autoPilot = myAutoPilot;
    }
    return Tesla;
}());
var myCar = new Tesla('S', 1000, 4, false);
//myCar.model = 'q' // доступно только для чтения
console.log(myCar);
var TeslaCar = /** @class */ (function () {
    function TeslaCar(model) {
        this.model = model;
    }
    TeslaCar.prototype.maxSpeed = function () {
        console.log("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C " + this.model + " 300\u043A\u043C/\u0447");
    };
    return TeslaCar;
}());
var MercedesCar = /** @class */ (function () {
    function MercedesCar(model) {
        this.model = model;
    }
    MercedesCar.prototype.maxSpeed = function () {
        console.log("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C " + this.model + " 200\u043A\u043C/\u0447");
    };
    return MercedesCar;
}());
function testMaxSpeed(car) {
    car.maxSpeed();
}
var teslaCar = new TeslaCar('Tesla');
testMaxSpeed(teslaCar);
var mercedesCar = new MercedesCar('Mercedes');
testMaxSpeed(mercedesCar);
//===============================ИНКАПСУЛЯЦИЯ================
var Car3 = /** @class */ (function () {
    function Car3(price, autoPilot) {
        this.price = price;
        this.autoPilot = autoPilot;
        this.model = 'S3';
    }
    Car3.prototype.getInfo = function () {
        console.log("model " + this.model + " price " + this.price);
    };
    return Car3;
}());
var Car4 = /** @class */ (function (_super) {
    __extends(Car4, _super);
    function Car4(price, autoPilot) {
        var _this = _super.call(this, price, autoPilot) || this;
        _this.price = price;
        _this.autoPilot = autoPilot;
        return _this;
    }
    Car4.prototype.getInfo = function () {
        console.log("price " + this.price + " autopilot " + this.autoPilot);
        //return this.model // Недоступно из-за свойства private
    };
    return Car4;
}(Car3));
var myCars = new Car3(3000, false);
myCars.getInfo();
var myCars2 = new Car4(2000, true);
myCars2.getInfo();
//console.log(myCars2.autoPilot);    // Недоступно из-за свойства protected
//==========================АБСТРАКЦИЯ========================
//Абстрактные классы нужны что бы от них наследоваться
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.getVersion = function () {
        return '1.2';
    };
    return Component;
}());
var CarComponent = /** @class */ (function (_super) {
    __extends(CarComponent, _super);
    function CarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarComponent.prototype.render = function () {
        console.log('Component render');
    };
    CarComponent.prototype.info = function () {
        return 'This is info';
    };
    return CarComponent;
}(Component));
var version = new CarComponent();
console.log(version.getVersion());
//# sourceMappingURL=test_OOP.js.map