interface IFordCar {
	getName(): string;
	getPrice(): number;
}

class FordCar implements IFordCar {
	public getName(): string {
		return 'Ford'
	}
	public getPrice(): number {
		return 2000;
	}
}

// -------------------------------------------------------------

abstract class FordDecorator extends FordCar {
	constructor(protected car: FordCar) {
		super();
	}
	public getName(): string {
		return this.car.getName()
	}

	public getPrice(): number {
		return this.car.getPrice();
	}
}

// -------------------------------------------------------------

class ParktronicDecorator extends FordDecorator {

	public getName(): string {
		return ` ${super.getName()} с парктроником`
	}

	public getPrice(): number {
		return this.car.getPrice() + 500
	}
}

class AutopilotDecorator extends FordDecorator {

	public getName(): string {
		return `${super.getName()} с автопилотом`
	}

	public getPrice(): number {
		return this.car.getPrice() + 1000
	}
}

type ConfigFord = {
	parktronic?: boolean;
	autopilot?: boolean;
}


class FordFactory {
	public create(config?: ConfigFord): FordCar {
		let fordCar = new FordCar();

		if (!config) {
			return fordCar
		}
		if (config.parktronic) {
			return new ParktronicDecorator(fordCar)
		}
		if (config.autopilot) {
			return new AutopilotDecorator(fordCar)
		}
		return fordCar
	}
}

const createFordCar = function (car: IFordCar) {
	console.log(`автомобиль ${car.getName()} его стоимость ${car.getPrice()}`)
}

const fordFactory = new FordFactory()

createFordCar(fordFactory.create({
	parktronic: true
}))

createFordCar(fordFactory.create({
	autopilot: true
}))

createFordCar(fordFactory.create({
	parktronic: true,
	autopilot: true
}))


