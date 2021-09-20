var News = /** @class */ (function () {
    function News() {
        this.news = '';
        this.actions = [];
    }
    News.prototype.setNews = function (text) {
        this.news = text;
        this.notify();
    };
    News.prototype.notify = function () {
        var _this = this;
        return this.actions.forEach(function (element) { return element.info(_this.news); });
    };
    News.prototype.register = function (observer) {
        this.actions.push(observer);
    };
    News.prototype.unregister = function (observer) {
        this.actions = this.actions.splice(this.actions.indexOf(observer));
    };
    return News;
}());
var NickObserver = /** @class */ (function () {
    function NickObserver() {
    }
    NickObserver.prototype.info = function (message) {
        console.log("\u041D\u043E\u0432\u0430\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u041D\u0438\u043A\u0430: " + message + " ");
    };
    return NickObserver;
}());
var MaxObserver = /** @class */ (function () {
    function MaxObserver() {
    }
    MaxObserver.prototype.info = function (message) {
        console.log("\u041D\u043E\u0432\u0430\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u041C\u0430\u043A\u0441\u0430: " + message);
    };
    return MaxObserver;
}());
var news = new News();
news.register(new NickObserver());
news.register(new MaxObserver());
news.setNews('какая то новость');
//# sourceMappingURL=observe.js.map