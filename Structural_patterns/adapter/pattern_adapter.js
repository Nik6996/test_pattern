var WindowsXP = /** @class */ (function () {
    function WindowsXP() {
    }
    WindowsXP.prototype.startApp = function (windowsApp) {
        windowsApp.start();
    };
    return WindowsXP;
}());
var WindowsMinecraft = /** @class */ (function () {
    function WindowsMinecraft() {
    }
    WindowsMinecraft.prototype.start = function () {
        console.log('Сейчас играете в Windows Minecraft.');
    };
    return WindowsMinecraft;
}());
var LinuxSolitaire = /** @class */ (function () {
    function LinuxSolitaire() {
    }
    LinuxSolitaire.prototype.run = function () {
        console.log('Сейчас играете в Linux Solitaire.');
    };
    return LinuxSolitaire;
}());
// ----------------------------------------------
var EmulatedLinuxApp = /** @class */ (function () {
    function EmulatedLinuxApp(linuxApp) {
        this.linuxApp = linuxApp;
    }
    EmulatedLinuxApp.prototype.start = function () {
        this.linuxApp.run();
    };
    return EmulatedLinuxApp;
}());
// ----------------------------------------------
var windowsXP = new WindowsXP();
windowsXP.startApp(new WindowsMinecraft());
windowsXP.startApp(new EmulatedLinuxApp(new LinuxSolitaire()));
// interface IWindowsApp {
// 	requestWindows(): string
// }
// interface ILinuxApp {
// 	requestLinux(): string
// }
// class WindowsApp implements IWindowsApp {
// 	public requestWindows(): string {
// 		return 'приложение для Windows'
// 	}
// }
// class LinuxApp implements ILinuxApp {
// 	public requestLinux(): string {
// 		return 'приложение для Linux'
// 	}
// }
// class Adapter implements IWindowsApp {
// 	constructor(private linuxApp: ILinuxApp) { }
// 	public requestWindows(): string {
// 		const result = this.linuxApp.requestLinux();
// 		return `теперь Windows использует ${result}`;
// 	}
// }
// const windowsApp = new WindowsApp()
// const linuxApp = new LinuxApp()
// const adapter = new Adapter(linuxApp)
// console.log(adapter.requestWindows())
//# sourceMappingURL=pattern_adapter.js.map