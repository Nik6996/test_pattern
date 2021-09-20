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
var Color = /** @class */ (function () {
    function Color(type) {
        this.type = type;
    }
    Color.prototype.getColor = function () {
        return this.type;
    };
    return Color;
}());
var Model = /** @class */ (function () {
    function Model(color) {
        this.color = color;
    }
    return Model;
}());
var BlackColor = /** @class */ (function (_super) {
    __extends(BlackColor, _super);
    function BlackColor() {
        return _super.call(this, 'черный') || this;
    }
    return BlackColor;
}(Color));
var RedColor = /** @class */ (function (_super) {
    __extends(RedColor, _super);
    function RedColor() {
        return _super.call(this, 'красный') || this;
    }
    return RedColor;
}(Color));
var VolvoCar = /** @class */ (function (_super) {
    __extends(VolvoCar, _super);
    function VolvoCar(color) {
        return _super.call(this, color) || this;
    }
    VolvoCar.prototype.paint = function () {
        return "\u0446\u0432\u0435\u0442 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E " + this.color.getColor();
    };
    return VolvoCar;
}(Model));
var AudiCar = /** @class */ (function (_super) {
    __extends(AudiCar, _super);
    function AudiCar(color) {
        return _super.call(this, color) || this;
    }
    AudiCar.prototype.paint = function () {
        return "\u0446\u0432\u0435\u0442 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E " + this.color.getColor();
    };
    return AudiCar;
}(Model));
var red = new RedColor();
var black = new BlackColor();
var redVolvo = new VolvoCar(black);
console.log(redVolvo.paint());
// class ChangeColorCar {
// 	protected color: IColor;
// 	constructor(color: IColor) {
// 		this.color = color;
// 	}
// 	public newColor(): string {
// 		const result = this.color.newColor()
// 		return result
// 	}
// }
// interface IColor {
// 	newColor(): string;
// }
// class BlackColor implements IColor {
// 	public newColor(): string {
// 		return 'черный цвет'
// 	}
// }
// class RedColor implements IColor {
// 	public newColor(): string {
// 		return 'красный цвет'
// 	}
// }
// const blackColor = new BlackColor();
// const redColor = new RedColor();
// const changeColor = new ChangeColorCar(blackColor);
// console.log(changeColor.newColor())
//# sourceMappingURL=bridge.js.map