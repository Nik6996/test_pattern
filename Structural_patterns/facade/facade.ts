
class Facade {
	protected number1: Number1;
	protected number2: Number2;

	constructor(number1: Number1, number2: Number2) {
		this.number1 = number1;
		this.number2 = number2;
	}

	public calc(): number {
		const result = this.number1.getNumber() + this.number2.getNumber();
		return result
	}
}

class Number1 {
	private num: number;

	constructor(num: number) {
		this.num = num;
	}
	public getNumber(): number {
		return this.num
	}
}

class Number2 {
	private num: number;

	constructor(num: number) {
		this.num = num;
	}
	public getNumber(): number {
		return this.num
	}
}


let num1 = new Number1(5);
let num2 = new Number2(10);

let facade = new Facade(num1, num2);

console.log(facade.calc())