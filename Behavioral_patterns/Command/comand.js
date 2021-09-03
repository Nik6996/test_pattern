var Button = /** @class */ (function () {
    function Button(command) {
        this.command = command;
    }
    Button.prototype.execute = function () {
        return this.command.execute();
    };
    return Button;
}());
var WindowControl = /** @class */ (function () {
    function WindowControl() {
        this.state = 'окно закрыто';
    }
    WindowControl.prototype.open = function () {
        return this.state = 'окно открыто';
    };
    WindowControl.prototype.closet = function () {
        return this.state = 'окно закрыто';
    };
    return WindowControl;
}());
var OnCommand = /** @class */ (function () {
    function OnCommand(button) {
        this.button = button;
    }
    OnCommand.prototype.execute = function () {
        return this.button.open();
    };
    return OnCommand;
}());
var OffCommand = /** @class */ (function () {
    function OffCommand(button) {
        this.button = button;
    }
    OffCommand.prototype.execute = function () {
        return this.button.closet();
    };
    return OffCommand;
}());
var windowControl = new WindowControl();
var openWindow = new OnCommand(windowControl);
var closetWindow = new OffCommand(windowControl);
var buttonOpen = new Button(openWindow);
var buttonCloset = new Button(closetWindow);
console.log(buttonOpen.execute());
console.log(buttonCloset.execute());
//# sourceMappingURL=comand.js.map