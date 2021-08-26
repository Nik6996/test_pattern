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






// конкретный продукт

// interface ProductDieselCar {
// 	info(): string | number
// 	price: number
// 	model: string
// }
// interface ProductElectroCar {
// 	model(): string
// }


// class AudiProductDiesel implements ProductDieselCar {
// 	price: number = 2000
// 	model: string = "Audi S6"
// 	public info(): string | number {
// 		return `Mодель авто ${this.model} его цена ${this.price}$`
// 	}
// }
// class AudiProductElectric implements ProductElectroCar {
// 	public model(): string {
// 		return "Audi A6"
// 	}

// }

// class BmwProductDiesel implements ProductDieselCar {
// 	price: number = 3000
// 	model: string = "Bmw M5"
// 	public info(): string {
// 		return `Mодель авто ${this.model} его цена ${this.price}$`
// 	}
// }

// class BmwProductElectric implements ProductElectroCar {
// 	public model(): string {
// 		return "Bmw I3"
// 	}
// }
// //====================================================================

// interface AbstractFactoryCar {     // абстрактная фабрика
// 	createDieselCar(): ProductDieselCar;
// 	createElectroCar(): ProductElectroCar;
// }

// class FactoryAudiCar implements AbstractFactoryCar {    //фабрика по производству ауди
// 	public createDieselCar(): ProductDieselCar {
// 		return new AudiProductDiesel();
// 	}
// 	public createElectroCar(): ProductElectroCar {
// 		return new AudiProductElectric();
// 	}
// }

// class FactoryBmwCar implements AbstractFactoryCar { // такая же фабрика только BMW
// 	public createDieselCar(): ProductDieselCar {
// 		return new BmwProductDiesel();
// 	}
// 	public createElectroCar(): ProductElectroCar {
// 		return new BmwProductElectric();
// 	}
// }


// function code(factory: AbstractFactoryCar) {
// 	const audi = factory.createDieselCar();
// 	const bmw = factory.createElectroCar();
// 	console.log(audi.info());
// 	console.log(bmw.model());
// }

// code(new FactoryBmwCar())
// code(new FactoryAudiCar());


















