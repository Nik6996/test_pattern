var Connection = /** @class */ (function () {
    function Connection() {
        this.id = 1;
    }
    Connection.getInstance = function () {
        //console.log('getInstance');
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    };
    Connection.prototype.getId = function () {
        return this.id;
    };
    Connection.prototype.setId = function (id) {
        if (id > 0) {
            this.id = id;
        }
    };
    return Connection;
}());
var connection = Connection.getInstance();
connection.setId(2);
console.log(connection.getId());
var connection2 = Connection.getInstance();
connection2.setId(3);
console.log(connection2.getId());
//# sourceMappingURL=pattern_singleton.js.map