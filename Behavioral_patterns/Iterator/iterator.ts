interface Iterator {
	next(): string
	hasNext(): boolean
}

class MyIterator implements Iterator {
	private index: number = 0;
	constructor(public items: string[]) { }
	public next(): string {
		return this.items[this.index++]
	}
	public hasNext(): boolean {
		return this.index < this.items.length
	}
}

const collection = new MyIterator(['a', 'b', 'c', 'd'])

while (collection.hasNext()) {
	console.log(collection.next())
}

