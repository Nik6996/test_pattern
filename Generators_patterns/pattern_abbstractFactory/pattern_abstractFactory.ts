interface Engine {
	name: string;
}

class ElectroEngine implements Engine {
	name: string = 'electro-engine';
}

class DieselEngine implements Engine {
	name: string = 'diesel-engine'
}

interface Car {
	model: string;
	engine: Engine;
}

class ElectroCar implements Car {
	constructor(
		public model: string,
		public engine: ElectroEngine
	) { }
}

class DieselCar implements Car {
	constructor(
		public model: string,
		public engine: DieselEngine
	) { }
}

interface CarFactory {    //абстрактная фабрика
	createCar(): Car;
	createEngine(): Engine;
}

class ElectroCarFactory implements CarFactory { //просто фабрика
	createCar(): ElectroCar {
		return new ElectroCar('electro-car', this.createEngine())
	}
	createEngine(): ElectroEngine {
		return new ElectroEngine();
	}
}

class DieselCarFactory implements CarFactory {
	createCar(): DieselCar {
		return new DieselCar('diesel-car', this.createEngine())
	}
	createEngine(): DieselEngine {
		return new DieselEngine();
	}
}

let electroCarFactory = new ElectroCarFactory();
const electroCar1 = electroCarFactory.createCar();
const electroCar2 = electroCarFactory.createCar();

console.log(electroCar1)

