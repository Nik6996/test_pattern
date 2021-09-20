
class TextEditor {
	private state: State;
	constructor(state: State) {
		this.link(state);
	}
	public link(state: State): void {
		this.state = state;
		this.state.setState(this)
	}

	public request(): void {
		this.state.write();
	}

}

abstract class State {
	protected dataEditor: TextEditor;

	public setState(data: TextEditor) {
		this.dataEditor = data;
	}
	abstract write(): void;
}


class FontMedium extends State {
	public write(): void {
		console.log('средний шрифт')
		this.dataEditor.link(new FontBold())
	}

}

class FontBold extends State {
	public write(): void {
		console.log('жирный шрифт')
		this.dataEditor.link(new FontMedium())
	}
}


const textEditor = new TextEditor(new FontMedium())

textEditor.request();
let textEditor1 = textEditor
textEditor1.request();



















// interface IState {
// 	write(): void;
// }

// class SmallFont implements IState {
// 	public write(): void {
// 		console.log(`шрифт маленький`)
// 	}
// }

// class MediumFont implements IState {
// 	public write(): void {
// 		console.log(`шрифт средний`)

// 	}
// }

// class BoldFont implements IState {
// 	public write(): void {
// 		console.log(`шрифт жирный`)
// 	}
// }


// class TextEditor {
// 	private state: IState;
// 	constructor(state: IState) {
// 		this.state = state;
// 	}

// 	public setState(state: IState): void {
// 		this.state = state;
// 	}
// 	public getState(): void {
// 		this.state.write();
// 	}
// }

// const editor1 = new TextEditor(new SmallFont());

// editor1.getState()

// editor1.setState(new MediumFont())

// editor1.getState()

// editor1.setState(new BoldFont())

// editor1.getState()
