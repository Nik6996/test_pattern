interface IWindowsApp {
	requestWindows(): string
}

interface ILinuxApp {
	requestLinux(): string
}

class WindowsApp implements IWindowsApp {
	public requestWindows(): string {
		return 'приложение для Windows'
	}
}

class LinuxApp implements ILinuxApp {
	public requestLinux(): string {
		return 'приложение для Linux'
	}
}

class Adapter implements IWindowsApp {

	constructor(private linuxApp: ILinuxApp) { }

	public requestWindows(): string {
		const result = this.linuxApp.requestLinux();
		return `теперь Windows использует ${result}`;
	}
}


const windowsApp = new WindowsApp()
const linuxApp = new LinuxApp()

const adapter = new Adapter(linuxApp)

console.log(adapter.requestWindows())
