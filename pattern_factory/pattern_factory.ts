
interface TopCar {
	model: string | number
	price: number
	speed: number
}
interface TopCar1 {
	model: string | number
	price: number
	autoPilot: boolean
}


class BmwCar implements TopCar {
	constructor(
		public model: string | number,
		public price: number,
		public speed: number) { }
}

class VolvoCar implements TopCar1 {
	constructor(
		public model: string | number,
		public price: number,
		public autoPilot: boolean
	) { }
}

class CarFactory {
	create(type: string) {
		if (type === 'X3')
			return new BmwCar(type, 5000, 200);
		if (type === 'W8')
			return new VolvoCar(type, 10000, true);
		if (type === 'X6')
			return new BmwCar(type, 20000, 350);
	}
}

const newBmw = new CarFactory();
let x5 = newBmw.create('X6');
console.log(x5);


const newVolvo = new CarFactory()
let w8 = newVolvo.create('W8')
console.log(w8)


