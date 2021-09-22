
class Computer {
	public makeStartSound(): void {
		console.log('Звук включения')
	}
	public loadingScreen(): void {
		console.log('Загрузка...')
	}
	public readyToWork(): void {
		console.log('Готов к работе')
	}
	public makeFinishSound(): void {
		console.log('Звук завершения работы')
	}
	public closingPrograms(): void {
		console.log('Закрытие программ')
	}
}


class FacadeComputer {
	protected computer: Computer
	constructor(computer: Computer) {
		this.computer = computer || new Computer();
	}

	public turnOn(): void {
		this.computer.makeStartSound();
		this.computer.loadingScreen();
		this.computer.readyToWork();
	}

	public turnOff(): void {
		this.computer.closingPrograms();
		this.computer.makeFinishSound();
	}
}

let computer = new Computer()
let computerFacade = new FacadeComputer(computer)

computerFacade.turnOn()
computerFacade.turnOff()


























// class Facade {
// 	protected number1: Number1;
// 	protected number2: Number2;

// 	constructor(number1: Number1, number2: Number2) {
// 		this.number1 = number1;
// 		this.number2 = number2;
// 	}

// 	public calc(): number {
// 		const result = this.number1.getNumber() + this.number2.getNumber();
// 		return result
// 	}
// }

// class Number1 {
// 	private num: number;

// 	constructor(num: number) {
// 		this.num = num;
// 	}
// 	public getNumber(): number {
// 		return this.num
// 	}
// }

// class Number2 {
// 	private num: number;

// 	constructor(num: number) {
// 		this.num = num;
// 	}
// 	public getNumber(): number {
// 		return this.num
// 	}
// }


// let num1 = new Number1(5);
// let num2 = new Number2(10);

// let facade = new Facade(num1, num2);

// console.log(facade.calc())