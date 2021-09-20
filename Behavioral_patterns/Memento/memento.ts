interface Memento {
	getContent(): string;
	getContent1(): string;
}


class EditorMemento implements Memento {
	private content: string;
	private content2: string;
	constructor(content: string, content2: string) {
		this.content = content;
		this.content2 = content2;
	}

	public getContent(): string {
		return this.content
	}
	public getContent1(): string {
		return this.content2
	}
}


class Editor {
	private content: string;
	private content1: string;

	public type(text: string, text1: string): void {
		this.content = text;
		this.content1 = text1;
	}

	public getContent(): string {
		return this.content + ' ' + this.content1
	}


	public save(): EditorMemento {
		return new EditorMemento(this.content, this.content1);
	}

	public restore(memento: EditorMemento): void {
		this.content = memento.getContent();
		this.content1 = memento.getContent1();
	}
}

const editor = new Editor();


editor.type('первое', 'значение');
console.log(editor.getContent());


let saved = editor.save();
editor.type('новые', 'данные');

console.log(editor.getContent());

editor.restore(saved)

console.log(editor.getContent())

let testMemento = new EditorMemento('ложные', 'данные')

console.log(testMemento.getContent(), testMemento.getContent1())