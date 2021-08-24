
interface IBuilderCar {
	wheels(wheels: number): void
	engine(engineNew: string): void
	autoPilot(autoPilotNew: boolean): void
}

class Car1 {
	constructor(
		public wheels: number = 4,
		public engine: string = 'V8',
		public autoPilot: boolean = false
	) { }

}

class BuilderCar implements IBuilderCar {
	public car: Car1
	constructor() {
		this.car = new Car1();
	}

	public wheels(wheelNew: number): number {
		return this.car.wheels = wheelNew
	}
	public engine(engineNew: string): string {

		return this.car.engine = engineNew
	}
	public autoPilot(autoPilotNew: boolean): boolean {
		return this.car.autoPilot = autoPilotNew
	}

	builder() {
		return this.car
	}
}

let testBuilder = new BuilderCar()
testBuilder.wheels(8);
testBuilder.engine('V8 Turbo');
testBuilder.autoPilot(true);
testBuilder.builder();

console.log(testBuilder.builder().autoPilot)












