var ElectroEngine = /** @class */ (function () {
    function ElectroEngine() {
        this.name = 'electro-engine';
    }
    return ElectroEngine;
}());
var DieselEngine = /** @class */ (function () {
    function DieselEngine() {
        this.name = 'diesel-engine';
    }
    return DieselEngine;
}());
var ElectroCar = /** @class */ (function () {
    function ElectroCar(model, engine) {
        this.model = model;
        this.engine = engine;
    }
    return ElectroCar;
}());
var DieselCar = /** @class */ (function () {
    function DieselCar(model, engine) {
        this.model = model;
        this.engine = engine;
    }
    return DieselCar;
}());
var ElectroCarFactory = /** @class */ (function () {
    function ElectroCarFactory() {
    }
    ElectroCarFactory.prototype.createCar = function () {
        return new ElectroCar('electro-car', this.createEngine());
    };
    ElectroCarFactory.prototype.createEngine = function () {
        return new ElectroEngine();
    };
    return ElectroCarFactory;
}());
var DieselCarFactory = /** @class */ (function () {
    function DieselCarFactory() {
    }
    DieselCarFactory.prototype.createCar = function () {
        return new DieselCar('diesel-car', this.createEngine());
    };
    DieselCarFactory.prototype.createEngine = function () {
        return new DieselEngine();
    };
    return DieselCarFactory;
}());
var electroCarFactory = new ElectroCarFactory();
var electroCar1 = electroCarFactory.createCar();
var electroCar2 = electroCarFactory.createCar();
console.log(electroCar1);
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
//# sourceMappingURL=pattern_abstractFactory.js.map