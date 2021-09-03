class Iterator {
	private index: number
	public elements: number
	constructor(el: any) {
		this.index = 0;
		this.elements = el;
	}
	next() {
		return this.elements[this.index++]
	}

	hasNext() {
		return this.index < this.elements;
	}
}

const collection = new Iterator([1, 2, 3, 4, 5])

console.log(collection.elements)
