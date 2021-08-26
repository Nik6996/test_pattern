var MyCar = /** @class */ (function () {
    function MyCar(price, model, parctronic) {
        this.price = price;
        this.model = model;
        this.parctronic = parctronic;
    }
    MyCar.prototype.clone = function () {
        return new MyCar(this.price, this.model, this.parctronic);
    };
    return MyCar;
}());
var testProto = new MyCar(1000, 'M4', true);
var newCar1 = testProto.clone();
function cloneCar() {
    var newClone = newCar1.clone();
    newClone.model = 'M6';
    newClone.parctronic = false;
    return newClone;
}
console.log(cloneCar());
//# sourceMappingURL=pattern_prototype.js.map