interface IColor {
	getColor(): string;
}

class Color implements IColor {
	constructor(private type: string) { }

	getColor(): string {
		return this.type
	}
}

abstract class Model {

	constructor(protected color: IColor) {
	}
	abstract paint(): string;
}

class BlackColor extends Color {
	constructor() {
		super('черный')
	}
}

class RedColor extends Color {
	constructor() {
		super('красный')
	}
}

class VolvoCar extends Model {
	constructor(color: IColor) {
		super(color)
	}
	paint(): string {
		return `цвет данного авто ${this.color.getColor()}`
	}
}

class AudiCar extends Model {
	constructor(color: IColor) {
		super(color)
	}
	paint(): string {
		return `цвет данного авто ${this.color.getColor()}`
	}
}

// ------------------------------------------

const red = new RedColor()
const black = new BlackColor()
const redVolvo = new VolvoCar(black)

console.log(redVolvo.paint())





















// class ChangeColorCar {
// 	protected color: IColor;
// 	constructor(color: IColor) {
// 		this.color = color;
// 	}

// 	public newColor(): string {
// 		const result = this.color.newColor()
// 		return result
// 	}
// }

// interface IColor {
// 	newColor(): string;
// }

// class BlackColor implements IColor {
// 	public newColor(): string {
// 		return 'черный цвет'
// 	}
// }

// class RedColor implements IColor {
// 	public newColor(): string {
// 		return 'красный цвет'
// 	}
// }

// const blackColor = new BlackColor();
// const redColor = new RedColor();

// const changeColor = new ChangeColorCar(blackColor);

// console.log(changeColor.newColor())
