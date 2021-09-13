var SmallFont = /** @class */ (function () {
    function SmallFont() {
    }
    SmallFont.prototype.write = function (words) {
        console.log("\u0448\u0440\u0438\u0444\u0442 " + words);
    };
    return SmallFont;
}());
var MediumFont = /** @class */ (function () {
    function MediumFont() {
    }
    MediumFont.prototype.write = function (words) {
        console.log("\u0448\u0440\u0438\u0444\u0442 " + words);
    };
    return MediumFont;
}());
var BoldFont = /** @class */ (function () {
    function BoldFont() {
    }
    BoldFont.prototype.write = function (words) {
        console.log("\u0448\u0440\u0438\u0444\u0442 " + words);
    };
    return BoldFont;
}());
var TextEditor = /** @class */ (function () {
    function TextEditor(state) {
        this.state = state;
    }
    TextEditor.prototype.setState = function (state) {
        this.state = state;
    };
    TextEditor.prototype.type = function (words) {
        this.state.write(words);
    };
    return TextEditor;
}());
var editor1 = new TextEditor(new SmallFont());
editor1.type('маленький');
editor1.setState(new MediumFont());
editor1.type('средний');
editor1.setState(new BoldFont());
editor1.type('жирный');
//# sourceMappingURL=state.js.map