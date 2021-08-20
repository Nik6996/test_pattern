

class ProducerCar {
	create(typeCar: string) {
		if (typeCar === 'family')
			return new FamilyCar().bmwX5
		if (typeCar === 'sport')
			return new SportCar().bmwM4
	}
}

class SportCar {
	bmwM4() {
		return new BmwM4();
	}
}

class FamilyCar {
	bmwX5() {
		return new BmwX5();
	}
}

class BmwM4 {
	info() {
		return 'Bmw sport car'
	}
}
class BmwX5 {
	info() {
		return 'Bmw family car'
	}
}


let carTest1 = new ProducerCar()
let carTest2 = carTest1.create('sport');
let carTest3 = carTest1.create('family');
console.log(carTest2)
console.log(carTest3)




