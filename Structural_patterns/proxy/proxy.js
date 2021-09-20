var User1 = /** @class */ (function () {
    function User1() {
    }
    User1.prototype.loginName = function () {
        console.log('user1');
    };
    User1.prototype.setPass = function (pass) {
        this.pass = pass;
    };
    User1.prototype.getPass = function () {
        return this.pass;
    };
    return User1;
}());
var Proxy = /** @class */ (function () {
    function Proxy(user) {
        this.user1 = user;
    }
    Proxy.prototype.loginName = function () {
        if (this.password() === true) {
            this.open();
        }
        else
            this.closet();
    };
    Proxy.prototype.password = function () {
        if (this.user1.getPass() === '1111') {
            return true;
        }
        return false;
    };
    Proxy.prototype.open = function () {
        console.log("\u0432\u0445\u043E\u0434 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D");
    };
    Proxy.prototype.closet = function () {
        console.log('неверный пароль');
    };
    return Proxy;
}());
var user1 = new User1();
user1.setPass('1111');
var proxy = new Proxy(user1);
proxy.loginName();
//# sourceMappingURL=proxy.js.map