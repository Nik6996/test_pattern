var Facade = /** @class */ (function () {
    function Facade(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    Facade.prototype.calc = function () {
        var result = this.number1.getNumber() + this.number2.getNumber();
        return result;
    };
    return Facade;
}());
var Number1 = /** @class */ (function () {
    function Number1(num) {
        this.num = num;
    }
    Number1.prototype.getNumber = function () {
        return this.num;
    };
    return Number1;
}());
var Number2 = /** @class */ (function () {
    function Number2(num) {
        this.num = num;
    }
    Number2.prototype.getNumber = function () {
        return this.num;
    };
    return Number2;
}());
var num1 = new Number1(5);
var num2 = new Number2(10);
var facade = new Facade(num1, num2);
console.log(facade.calc());
//# sourceMappingURL=facade.js.map