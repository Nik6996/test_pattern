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
var OpenCommand = /** @class */ (function () {
    function OpenCommand() {
    }
    OpenCommand.prototype.execute = function () {
        console.log('Открыть окно');
    };
    return OpenCommand;
}());
var ClosetCommand = /** @class */ (function () {
    function ClosetCommand() {
    }
    ClosetCommand.prototype.execute = function () {
        console.log('Закрыть окно');
    };
    return ClosetCommand;
}());
var Button = /** @class */ (function () {
    function Button(command) {
        this.command = command;
    }
    Button.prototype.click = function () {
        this.command.execute();
    };
    return Button;
}());
var OpenButton = /** @class */ (function (_super) {
    __extends(OpenButton, _super);
    function OpenButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = 'открыть';
        return _this;
    }
    return OpenButton;
}(Button));
var ClosetButton1 = /** @class */ (function (_super) {
    __extends(ClosetButton1, _super);
    function ClosetButton1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = 'закрыть';
        return _this;
    }
    return ClosetButton1;
}(Button));
var ClosetButton2 = /** @class */ (function (_super) {
    __extends(ClosetButton2, _super);
    function ClosetButton2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = 'выйти';
        return _this;
    }
    return ClosetButton2;
}(Button));
var openCommand = new OpenCommand();
var closetCommand = new ClosetCommand();
var button1 = new OpenButton(openCommand);
var button2 = new ClosetButton1(closetCommand);
var button3 = new ClosetButton2(closetCommand);
button1.click();
button2.click();
button3.click();
//# sourceMappingURL=command.js.map