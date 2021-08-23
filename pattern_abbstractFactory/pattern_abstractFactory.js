// конкретный продукт
var AudiProductDiesel = /** @class */ (function () {
    function AudiProductDiesel() {
        this.price = 2000;
        this.model = "Audi S6";
    }
    AudiProductDiesel.prototype.info = function () {
        return "M\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E " + this.model + " \u0435\u0433\u043E \u0446\u0435\u043D\u0430 " + this.price + "$";
    };
    return AudiProductDiesel;
}());
var AudiProductElectric = /** @class */ (function () {
    function AudiProductElectric() {
    }
    AudiProductElectric.prototype.model = function () {
        return "Audi A6";
    };
    return AudiProductElectric;
}());
var BmwProductDiesel = /** @class */ (function () {
    function BmwProductDiesel() {
        this.price = 3000;
        this.model = "Bmw M5";
    }
    BmwProductDiesel.prototype.info = function () {
        return "M\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E " + this.model + " \u0435\u0433\u043E \u0446\u0435\u043D\u0430 " + this.price + "$";
    };
    return BmwProductDiesel;
}());
var BmwProductElectric = /** @class */ (function () {
    function BmwProductElectric() {
    }
    BmwProductElectric.prototype.model = function () {
        return "Bmw I3";
    };
    return BmwProductElectric;
}());
var FactoryAudiCar = /** @class */ (function () {
    function FactoryAudiCar() {
    }
    FactoryAudiCar.prototype.createDieselCar = function () {
        return new AudiProductDiesel();
    };
    FactoryAudiCar.prototype.createElectroCar = function () {
        return new AudiProductElectric();
    };
    return FactoryAudiCar;
}());
var FactoryBmwCar = /** @class */ (function () {
    function FactoryBmwCar() {
    }
    FactoryBmwCar.prototype.createDieselCar = function () {
        return new BmwProductDiesel();
    };
    FactoryBmwCar.prototype.createElectroCar = function () {
        return new BmwProductElectric();
    };
    return FactoryBmwCar;
}());
function code(factory) {
    var audi = factory.createDieselCar();
    var bmw = factory.createElectroCar();
    console.log(audi.info());
    console.log(bmw.model());
}
code(new FactoryBmwCar());
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
//# sourceMappingURL=pattern_abstractFactory.js.map