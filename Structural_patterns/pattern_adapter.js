var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TestAdapter1 = /** @class */ (function () {
    function TestAdapter1() {
    }
    TestAdapter1.prototype.create = function () {
        return 'new car';
    };
    return TestAdapter1;
}());
var TestAdapter2 = /** @class */ (function () {
    function TestAdapter2() {
    }
    TestAdapter2.prototype.info = function () {
        return 'info car';
    };
    return TestAdapter2;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(forAdapter) {
        var _this = _super.call(this) || this;
        _this.forAdapter = forAdapter;
        return _this;
    }
    Adapter.prototype.request = function () {
        var result = this.forAdapter.info();
        return result;
    };
    return Adapter;
}(TestAdapter2));
//# sourceMappingURL=pattern_adapter.js.map