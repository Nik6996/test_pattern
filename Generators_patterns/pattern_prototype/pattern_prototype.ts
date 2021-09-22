interface IPrototype {
	clone(): IPrototype
}

class MyCar implements IPrototype {
	constructor(
		private price: number,
		public model: string,
		public parctronic: boolean
	) { }
	public clone(): MyCar {
		return new MyCar(this.price, this.model, this.parctronic);
	}
}


let testProto = new MyCar(1000, 'M4', true);
let newCar1 = testProto.clone();

function cloneCar() {
	let newClone = newCar1.clone();
	newClone.model = 'M6'
	newClone.parctronic = false
	return newClone
}

console.log(cloneCar());