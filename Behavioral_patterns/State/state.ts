interface IState {
	write(words: string): void;
}

class SmallFont implements IState {
	public write(words: string): void {
		console.log(`шрифт ${words}`)
	}
}

class MediumFont implements IState {
	public write(words: string): void {
		console.log(`шрифт ${words}`)
	}
}

class BoldFont implements IState {
	public write(words: string): void {
		console.log(`шрифт ${words}`)
	}
}


class TextEditor {
	private state: IState;
	constructor(state: IState) {
		this.state = state;
	}

	public setState(state: IState): void {
		this.state = state;
	}
	public type(words: string): void {
		this.state.write(words);
	}
}

const editor1 = new TextEditor(new SmallFont());

editor1.type('маленький');
editor1.setState(new MediumFont());
editor1.type('средний');
editor1.setState(new BoldFont());
editor1.type('жирный')

