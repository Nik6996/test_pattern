
interface IWindowsApp {
	start(): void;
}

class WindowsXP {

	public startApp(windowsApp: IWindowsApp): void {
		windowsApp.start();
	}

}

class WindowsMinecraft implements IWindowsApp {

	public start(): void {
		console.log('Сейчас играете в Windows Minecraft.');
	}
}

// ----------------------------------------------

interface ILinuxApp {
	run(): void;
}

class LinuxSolitaire implements ILinuxApp {

	public run(): void {
		console.log('Сейчас играете в Linux Solitaire.');
	}

}

// ----------------------------------------------

class EmulatedLinuxApp implements IWindowsApp {

	constructor(private linuxApp: ILinuxApp) { }

	public start(): void {
		this.linuxApp.run();
	}

}

// ----------------------------------------------

const windowsXP = new WindowsXP();
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





