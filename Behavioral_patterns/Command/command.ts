
interface IButton {
	text: string;
	command: ICommand;
	click(): void
}

interface ICommand {
	execute(): void
}

class OpenCommand implements ICommand {
	public execute(): void {
		console.log('Открыть окно')

	}
}

class ClosetCommand implements ICommand {
	public execute(): void {
		console.log('Закрыть окно')
	}
}

abstract class Button implements IButton {
	abstract text: string;
	constructor(public command: ICommand) { }
	click(): void {
		this.command.execute();
	}

}

class OpenButton extends Button {
	text: string = 'открыть'
}

class ClosetButton1 extends Button {
	text: string = 'закрыть'
}

class ClosetButton2 extends Button {
	text: string = 'выйти'
}



const openCommand = new OpenCommand()
const closetCommand = new ClosetCommand()

const button1 = new OpenButton(openCommand)
const button2 = new ClosetButton1(closetCommand)
const button3 = new ClosetButton2(closetCommand)


button1.click()
button2.click()
button3.click()
