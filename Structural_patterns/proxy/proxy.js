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
    SecurityDoor.prototype.open = function (password) {
        if (this.authenticate(password) === true) {
            this.door.open();
        }
        else {
            console.log('Неверный пароль, дверь не открыта');
        }
    };
    SecurityDoor.prototype.authenticate = function (password) {
        if (password === '1111') {
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
securityDoor.open('1111');
securityDoor.close();
//# sourceMappingURL=proxy.js.map