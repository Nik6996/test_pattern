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
var Mediator = /** @class */ (function () {
    function Mediator(component1, component2) {
        this.component1 = component1;
        this.component2 = component2;
        this.component1.setMediator(this);
        this.component2.setMediator(this);
    }
    // constructor(private component1: Cat, private component2: Dog) {
    // 	this.component1.setMediator(this);
    // 	this.component2.setMediator(this);
    // }
    Mediator.prototype.connection = function (event) {
        if (event === 'погулять') {
            console.log("\u0441\u043E\u0431\u044B\u0442\u0438\u0435 " + event + " \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E");
        }
        if (event === 'погладить') {
            console.log("\u0441\u043E\u0431\u044B\u0442\u0438\u0435 " + event + " \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E");
            this.component1.eat();
        }
        if (event === 'покормить') {
            console.log("\u0441\u043E\u0431\u044B\u0442\u0438\u0435 " + event + " \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E");
        }
    };
    return Mediator;
}());
var Enimal = /** @class */ (function () {
    function Enimal(mediator) {
        if (mediator === void 0) { mediator = null; }
        this.mediator = mediator;
    }
    Enimal.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return Enimal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.walk = function () {
        console.log('Cat выполняет погулять');
        this.mediator.connection('погулять'); // .?
    };
    Cat.prototype.eat = function () {
        console.log('Cat выполняет покормить'); // .?
        this.mediator.connection('покормить');
    };
    return Cat;
}(Enimal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.pet = function () {
        console.log('Dog выполняет погладить'); // .?
        this.mediator.connection('погладить');
    };
    return Dog;
}(Enimal));
var cat = new Cat();
var dog = new Dog();
var mediator = new Mediator(cat, dog);
cat.walk();
dog.pet();
//# sourceMappingURL=mediator.js.map