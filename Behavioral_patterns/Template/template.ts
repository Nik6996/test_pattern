abstract class CreateCar {
	public buildCar(): void {
		this.wheels();
		this.color();
		this.brand();
		this.model();
		this.maxSpeed();
		this.autoPilot();
	}
	protected wheels(): void {
		console.log('4 колеса')
	}
	protected color(): void {
		console.log('черный')
	}
	protected brand(): void {
		console.log('Tesla')
	}
	protected abstract model(): void;
	protected abstract maxSpeed(): void;
	protected autoPilot(): void { };

}

class TeslaCar1 extends CreateCar {
	model(): void {
		console.log('S')
	}
	maxSpeed(): void {
		console.log('200км/ч')
	}
}


class TeslaCar2 extends CreateCar {
	model(): void {
		console.log('X')
	}
	maxSpeed(): void {
		console.log('300км/ч')
	}
	autoPilot(): void {
		console.log('true')
	}
}

function createCar(car: CreateCar) {
	car.buildCar()
}

let tesla1 = createCar(new TeslaCar1());
console.log(tesla1);
// let tesla2 = createCar(new TeslaCar2());

// console.log(tesla2);
