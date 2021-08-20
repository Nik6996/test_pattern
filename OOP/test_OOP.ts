
//=========================НАСЛЕДОВАНИЕ=============

interface ICar {
	readonly model: string;
	price: number;
	wheel: number;
}

interface IModCar extends ICar {
	autoPilot: boolean;

}

class Tesla implements IModCar {
	readonly model: string;
	price: number;
	wheel: number;
	autoPilot: boolean;
	constructor(myModel: string, myPrice: number, myWheel: number, myAutoPilot: boolean) {
		this.model = myModel;
		this.price = myPrice;
		this.wheel = myWheel;
		this.autoPilot = myAutoPilot;
	}
}


let myCar = new Tesla('S', 1000, 4, false);
//myCar.model = 'q' // доступно только для чтения
console.log(myCar);

//===============================ПОЛИМОРФИЗМ=================
//=== Метод один реализации разные ===

interface ISpeedCar {
	model: string | number,
	maxSpeed(): void
}

class TeslaCar implements ISpeedCar {
	model: string | number
	constructor(model: string | number) {
		this.model = model;
	}
	maxSpeed() {
		console.log(`Максимальная скорость ${this.model} 300км/ч`)
	}
}

class MercedesCar implements ISpeedCar {
	model: string | number
	constructor(model: string | number) {
		this.model = model;
	}
	maxSpeed() {
		console.log(`Максимальная скорость ${this.model} 200км/ч`)
	}
}
function testMaxSpeed(car: ISpeedCar): void {
	car.maxSpeed();
}

let teslaCar = new TeslaCar('Tesla');
testMaxSpeed(teslaCar)


let mercedesCar = new MercedesCar('Mercedes');
testMaxSpeed(mercedesCar)




//===============================ИНКАПСУЛЯЦИЯ================

class Car3 {
	private model: string | number = 'S3'
	constructor(
		public price: number,
		protected autoPilot: boolean,
	) { }
	getInfo(): void {
		console.log(`model ${this.model} price ${this.price}`);
	}
}

class Car4 extends Car3 {
	constructor(
		public price: number,
		protected autoPilot: boolean, // Доступно в дочернем класе
	) {
		super(price, autoPilot)
	}
	getInfo(): void {  //Перегрузка методов
		console.log(`price ${this.price} autopilot ${this.autoPilot}`);

		//return this.model // Недоступно из-за свойства private
	}
}
let myCars = new Car3(3000, false);

myCars.getInfo()

let myCars2 = new Car4(2000, true)

myCars2.getInfo()
//console.log(myCars2.autoPilot);    // Недоступно из-за свойства protected



//==========================АБСТРАКЦИЯ========================
//Абстрактные классы нужны что бы от них наследоваться
abstract class Component {
	abstract render(): void
	abstract info(): string
	getVersion(): string {
		return '1.2'
	}
}

class CarComponent extends Component {
	render(): void {
		console.log('Component render')
	}
	info(): string {
		return 'This is info'
	}
}

let version = new CarComponent()
console.log(version.getVersion())

