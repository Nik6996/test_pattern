// конкретный продукт

interface ProductDieselCar {
	info(): string | number
	price: number
	model: string
}
interface ProductElectroCar {
	model(): string
}

class AudiProductDiesel implements ProductDieselCar {
	price: number = 2000
	model: string = "Audi S6"
	public info(): string | number {
		return `Mодель авто ${this.model} его цена ${this.price}$`
	}
}
class AudiProductElectric implements ProductElectroCar {
	public model(): string {
		return "Audi A6"
	}

}

class BmwProductDiesel implements ProductDieselCar {
	price: number = 3000
	model: string = "Bmw M5"
	public info(): string {
		return `Mодель авто ${this.model} его цена ${this.price}$`
	}
}

class BmwProductElectric implements ProductElectroCar {
	public model(): string {
		return "Bmw I3"
	}
}
//====================================================================

interface AbstractFactoryCar {     // абстрактная фабрика
	createDieselCar(): ProductDieselCar;
	createElectroCar(): ProductElectroCar;
}

class FactoryAudiCar implements AbstractFactoryCar {    //фабрика по производству ауди
	public createDieselCar(): ProductDieselCar {
		return new AudiProductDiesel();
	}
	public createElectroCar(): ProductElectroCar {
		return new AudiProductElectric();
	}
}

class FactoryBmwCar implements AbstractFactoryCar { // такая же фабрика только BMW
	public createDieselCar(): ProductDieselCar {
		return new BmwProductDiesel();
	}
	public createElectroCar(): ProductElectroCar {
		return new BmwProductElectric();
	}
}


function code(factory: AbstractFactoryCar) {
	const audi = factory.createDieselCar();
	const bmw = factory.createElectroCar();
	console.log(audi.info());
	console.log(bmw.model());
}

code(new FactoryBmwCar())
code(new FactoryAudiCar());















// type CarsType = string | number;

// interface Producer {
// 	create(typeCar: CarsType): CarsType
// }

// class ProducerCar implements Producer {          // абстрактная фабрика
// 	create(typeCar: CarsType): CarsType {
// 		if (typeCar === 'family')
// 			return new FamilyCar().bmwX5()
// 		if (typeCar === 'sport')
// 			return new SportCar().bmwM4()
// 	}

// }

// class SportCar {
// 	bmwM4(): CarsType {
// 		return new BmwM4().info();
// 	}
// }

// class FamilyCar {
// 	bmwX5(): CarsType {
// 		return new BmwX5().info();
// 	}
// }

// class BmwM4 {
// 	info(): CarsType {
// 		return 'Bmw sport car'
// 	}
// }
// class BmwX5 {
// 	info(): CarsType {
// 		return 'Bmw family car'
// 	}
// }

// let carTest1 = new ProducerCar()
// let carTest2 = carTest1.create('sport');
// let carTest3 = carTest1.create('family');
// console.log(carTest2)
// console.log(carTest3)




