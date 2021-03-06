
interface TopCar {
	model: string | number
	price: number
	speed: number
}



class BmwCar implements TopCar {
	constructor(
		public model: string | number,
		public price: number,
		public speed: number) { }
}


class SimpleCarFactory {
	create(type: string): TopCar {
		if (type === 'X3')
			return new BmwCar(type, 5000, 200);
		if (type === 'X5')
			return new BmwCar(type, 20000, 350);
	}
}

const newBmw = new SimpleCarFactory();
let x5 = newBmw.create('X5');
console.log(x5);


let x3 = newBmw.create('X3');
console.log(x3.model);



