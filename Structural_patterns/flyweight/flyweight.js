var Auto = /** @class */ (function () {
    function Auto(model) {
        this.model = model;
    }
    return Auto;
}());
var AutoFactory = /** @class */ (function () {
    function AutoFactory() {
        this.models = [];
    }
    AutoFactory.prototype.create = function (name) {
        var model = this.models[name];
        if (model) {
            return model;
        }
        else {
            this.models[name] = new Auto(name);
        }
        return this.models[name];
    };
    AutoFactory.prototype.getModels = function () {
        console.log(this.models);
    };
    return AutoFactory;
}());
var factory = new AutoFactory();
var audi = factory.create('audi');
var tesla = factory.create('tesla');
var tesla2 = factory.create('tesla');
console.log(factory.getModels());
//# sourceMappingURL=flyweight.js.map