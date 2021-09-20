interface CreateCars {
	carName(): string;
	carPrice(): number;
}

class FordCar implements CreateCars {
	public carName(): string {
		return 'Ford'
	}
	public carPrice(): number {
		return 2000
	}
}

class Decorator implements CreateCars {
	protected car: CreateCars;

	constructor(car: CreateCars) {
		this.car = car;
	}
	public carName(): string {
		return this.car.carName()
	}

	public carPrice(): number {
		return this.car.carPrice();
	}
}

class Parktronic extends Decorator {
	public carName(): string {
		return `автомобиль ${super.carName()} с парктроником`
	}

	public carPrice(): number {
		return this.car.carPrice() + 1000
	}

}



function client(car: CreateCars) {
	console.log(car.carName(), car.carPrice() + '$')
}

const ford = new FordCar();


const fordParktronic = new Parktronic(ford)
client(fordParktronic)

