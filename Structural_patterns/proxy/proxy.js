var Door = /** @class */ (function () {
    function Door() {
    }
    Door.prototype.open = function () {
        console.log('Дверь открыта');
    };
    Door.prototype.close = function () {
        console.log('Дверь закрыта');
    };
    return Door;
}());
var SecurityDoor = /** @class */ (function () {
    function SecurityDoor(door) {
        this.door = door;
    }
    SecurityDoor.prototype.open = function () {
        if (this.authenticate() === true) {
            this.door.open();
        }
        else {
            console.log('Неверный пароль, дверь не открыта');
        }
    };
    SecurityDoor.prototype.setPassword = function (password) {
        this.password = password;
    };
    SecurityDoor.prototype.authenticate = function () {
        if (this.password === '1111') {
            return true;
        }
        return false;
    };
    SecurityDoor.prototype.close = function () {
        this.door.close();
    };
    return SecurityDoor;
}());
var door = new Door();
var securityDoor = new SecurityDoor(door);
securityDoor.setPassword('1111');
securityDoor.open();
securityDoor.close();
//# sourceMappingURL=proxy.js.map