interface Memento {
	getContent(): string;
}

class EditorMemento implements Memento {

	constructor(private content: string) {
	}

	public getContent(): string {
		return this.content
	}
}


class Editor implements Memento {
	private content: string;


	public type(text: string): void {
		this.content = text;

	}

	public getContent(): string {
		return this.content

	}

	public save(): EditorMemento {
		return new EditorMemento(this.content);
	}

	public restore(memento: EditorMemento): void {
		this.content = memento.getContent();
	}
}

const editor = new Editor();

editor.type('test1');
editor.type('test2');

let saved = editor.save();
editor.type('test3');

console.log(editor.getContent())

editor.restore(saved)

console.log(editor.getContent())

let testMemento = new EditorMemento('string')
testMemento.getContent()