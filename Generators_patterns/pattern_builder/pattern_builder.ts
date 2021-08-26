
interface IBuilderCar {
	wheels: number;
	engine: string;
	autoPilot: boolean;
	parktronic: boolean;
}

class BuilderCar implements IBuilderCar {
	wheels: number = 4;
	engine: string = 'V8';
	autoPilot: boolean = false;
	parktronic: boolean = true;

	setWheels(wheels: number): BuilderCar {
		this.wheels = wheels
		return this;
	}
	setEngine(engine: string): BuilderCar {
		this.engine = engine;
		return this;
	}
	setAutoPilot(autoPilot: boolean): BuilderCar {
		this.autoPilot = autoPilot;
		return this;
	}
	setParktronic(parktronic: boolean): BuilderCar {
		this.parktronic = parktronic;
		return this;
	}

}

class Car1 {
	wheels: number;
	engine: string;
	autoPilot: boolean;
	parktronic: boolean;
	constructor(carBuilder: IBuilderCar) {
		this.wheels = carBuilder.wheels;
		this.engine = carBuilder.engine;
		this.autoPilot = carBuilder.autoPilot;
		this.parktronic = carBuilder.parktronic;
	}
}

const audiCarBuilder = new BuilderCar().setWheels(4).setEngine('V12').setAutoPilot(true);
const audiCar1 = new Car1(audiCarBuilder)
audiCarBuilder.setParktronic(false)
const audiCar2 = new Car1(audiCarBuilder)

console.log(audiCar2)



















