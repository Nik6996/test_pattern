var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.makeStartSound = function () {
        console.log('Звук включения');
    };
    Computer.prototype.loadingScreen = function () {
        console.log('Загрузка...');
    };
    Computer.prototype.readyToWork = function () {
        console.log('Готов к работе');
    };
    Computer.prototype.makeFinishSound = function () {
        console.log('Звук завершения работы');
    };
    Computer.prototype.closingPrograms = function () {
        console.log('Закрытие программ');
    };
    return Computer;
}());
var FacadeComputer = /** @class */ (function () {
    function FacadeComputer(computer) {
        this.computer = computer || new Computer();
    }
    FacadeComputer.prototype.turnOn = function () {
        this.computer.makeStartSound();
        this.computer.loadingScreen();
        this.computer.readyToWork();
    };
    FacadeComputer.prototype.turnOff = function () {
        this.computer.closingPrograms();
        this.computer.makeFinishSound();
    };
    return FacadeComputer;
}());
var computer = new Computer();
var computerFacade = new FacadeComputer(computer);
computerFacade.turnOn();
computerFacade.turnOff();
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
//# sourceMappingURL=facade.js.map