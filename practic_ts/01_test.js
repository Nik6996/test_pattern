var int = 44;
var numberArray = [1, 1, 2, 3, 5, 8];
//Tuple
var contact = ['name', 123345];
//Any
var variable = 20;
variable = 'text';
var login = 'text';
var id1 = 111;
var id2 = 'text';
var rect1 = {
    id: 'text',
    color: 'black',
    size: {
        width: 44,
        height: 11
    }
};
var rect2 = {};
var rect4 = {};
var rect5 = {
    id: '121',
    color: 'red',
    size: {
        width: 30,
        height: 40
    },
    getAria: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
//ENUMS
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 1000] = "Simple";
    Membership[Membership["Standart"] = 2000] = "Standart";
    Membership[Membership["Premium"] = 3000] = "Premium";
})(Membership || (Membership = {}));
var member = Membership.Premium;
//# sourceMappingURL=01_test.js.map