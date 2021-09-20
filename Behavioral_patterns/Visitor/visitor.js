var CarBmw = /** @class */ (function () {
    function CarBmw() {
    }
    CarBmw.prototype.checkTaxes = function (agent) {
        agent.checkTaxesForBmw(this);
    };
    CarBmw.prototype.price = function () {
        return 1000;
    };
    return CarBmw;
}());
var CarAudi = /** @class */ (function () {
    function CarAudi() {
    }
    CarAudi.prototype.checkTaxes = function (agent) {
        agent.checkTaxesForAudi(this);
    };
    CarAudi.prototype.price = function () {
        return 2000;
    };
    return CarAudi;
}());
var TaxAgent = /** @class */ (function () {
    function TaxAgent() {
    }
    TaxAgent.prototype.checkTaxesForBmw = function (data) {
        console.log("\u0446\u0435\u043D\u0430 BMW " + data.price());
    };
    TaxAgent.prototype.checkTaxesForAudi = function (data) {
        console.log("\u0446\u0435\u043D\u0430 Audi " + data.price());
    };
    return TaxAgent;
}());
var carBmw = new CarBmw();
var carAudi = new CarAudi();
var agent = new TaxAgent();
agent.checkTaxesForBmw(carBmw);
agent.checkTaxesForAudi(carAudi);
//# sourceMappingURL=visitor.js.map