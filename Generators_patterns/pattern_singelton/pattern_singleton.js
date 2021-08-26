var Connection = /** @class */ (function () {
    function Connection() {
        this.id = 1;
    }
    Connection.getInstance = function () {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    };
    Connection.prototype.getId = function () {
        return this.id;
    };
    Connection.prototype.setId = function (id) {
        if (id > 5) {
            this.id = id;
        }
        else {
            this.id = 5;
        }
    };
    return Connection;
}());
var connection = Connection.getInstance();
connection.setId(2);
console.log(connection.getId());
var connection2 = Connection.getInstance();
connection2.setId(7);
console.log(connection2.getId());
//# sourceMappingURL=pattern_singleton.js.map