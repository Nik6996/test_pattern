

interface IButton {
	execute(): string
}

class Button implements IButton {    //класс интерфейса
	private command: IButton
	constructor(command: IButton) {
		this.command = command;
	}

	execute(): string {
		return this.command.execute()
	}
}

class WindowControl {                         // логика запуска
	public state: string
	constructor() {
		this.state = 'окно закрыто';
	}
	open(): string {
		return this.state = 'окно открыто'
	}
	closet(): string {
		return this.state = 'окно закрыто'
	}
}


class OnStartCommand implements IButton {    // команда
	private button: WindowControl
	constructor(button: WindowControl) {
		this.button = button;
	}
	public execute(): string {
		return this.button.open()
	}
}

class OffCommand implements IButton {    // команда
	private button: WindowControl
	constructor(button: WindowControl) {
		this.button = button;
	}
	public execute(): string {
		return this.button.closet()
	}
}


const windowControl = new WindowControl();

const openWindow = new OnStartCommand(windowControl);
const closetWindow = new OffCommand(windowControl);
const buttonOpen = new Button(openWindow);
const buttonCloset = new Button(closetWindow);
console.log(buttonOpen.execute());
console.log(buttonCloset.execute());





