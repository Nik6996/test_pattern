var WindowsApp = /** @class */ (function () {
    function WindowsApp() {
    }
    WindowsApp.prototype.requestWindows = function () {
        return 'приложение для Windows';
    };
    return WindowsApp;
}());
var LinuxApp = /** @class */ (function () {
    function LinuxApp() {
    }
    LinuxApp.prototype.requestLinux = function () {
        return 'приложение для Linux';
    };
    return LinuxApp;
}());
var Adapter = /** @class */ (function () {
    function Adapter(linuxApp) {
        this.linuxApp = linuxApp;
    }
    Adapter.prototype.requestWindows = function () {
        var result = this.linuxApp.requestLinux();
        return "\u0442\u0435\u043F\u0435\u0440\u044C Windows \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 " + result;
    };
    return Adapter;
}());
var windowsApp = new WindowsApp();
var linuxApp = new LinuxApp();
var adapter = new Adapter(linuxApp);
console.log(adapter.requestWindows());
//# sourceMappingURL=pattern_adapter.js.map