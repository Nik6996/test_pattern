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
var AbstractLogin = /** @class */ (function () {
    function AbstractLogin() {
    }
    AbstractLogin.prototype.setNext = function (login) {
        this.nextStep = login;
        return login;
    };
    AbstractLogin.prototype.name = function (request) {
        if (this.nextStep) {
            return this.nextStep.name(request);
        }
        return null;
    };
    return AbstractLogin;
}());
var User1 = /** @class */ (function (_super) {
    __extends(User1, _super);
    function User1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User1.prototype.name = function (request) {
        if (request === 'Иван') {
            return "\u0418\u043C\u044F " + request + " \u0432\u043E\u0437\u0440\u0430\u0441\u0442 25.";
        }
        return _super.prototype.name.call(this, request);
    };
    return User1;
}(AbstractLogin));
var User2 = /** @class */ (function (_super) {
    __extends(User2, _super);
    function User2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User2.prototype.name = function (request) {
        if (request === 'Миша') {
            return "\u0438\u043C\u044F " + request + " \u0432\u043E\u0437\u0440\u0430\u0441\u0442 33.";
        }
        return _super.prototype.name.call(this, request);
    };
    return User2;
}(AbstractLogin));
var User3 = /** @class */ (function (_super) {
    __extends(User3, _super);
    function User3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User3.prototype.name = function (request) {
        if (request === 'Саша') {
            return "\u0438\u043C\u044F " + request + " \u0432\u043E\u0437\u0440\u0430\u0441\u0442 33.";
        }
        return _super.prototype.name.call(this, request);
    };
    return User3;
}(AbstractLogin));
function user(userName) {
    var users = ['Миша', 'Сергей', 'Иван', 'Саша'];
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user_1 = users_1[_i];
        console.log("\u0422\u0432\u043E\u0435 \u0438\u043C\u044F " + user_1 + "?");
        var result = userName.name(user_1);
        if (result) {
            console.log("" + result);
        }
        else {
            console.log(user_1 + " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
        }
    }
}
var user1 = new User1();
var user2 = new User2();
var user3 = new User3();
user1.setNext(user2).setNext(user3);
user(user1);
//# sourceMappingURL=Chain_of_responsibility.js.map