var Product = /** @class */ (function () {
    function Product(price) {
        this.price = price;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var Package = /** @class */ (function () {
    function Package(price, products) {
        this.price = price;
        this.products = products;
    }
    Package.prototype.getProducts = function () {
        return this.products;
    };
    Package.prototype.getPrice = function () {
        var totalPrice = this.price;
        for (var _i = 0, _a = this.getProducts(); _i < _a.length; _i++) {
            var product = _a[_i];
            totalPrice += product.getPrice();
        }
        return totalPrice;
    };
    return Package;
}());
var pen = new Product(10);
var phone = new Product(500);
var notebook = new Product(1000);
var smallPackage = new Package(2, [pen]);
var mediumPackage = new Package(1, [phone, smallPackage]);
var largePackage = new Package(2, [notebook, mediumPackage]);
console.log("Total Price: " + largePackage.getPrice() + "$");
//# sourceMappingURL=composite.js.map