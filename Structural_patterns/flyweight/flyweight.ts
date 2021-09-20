class Flyweight {
	private state: any;
	constructor(state: any) {
		this.state = state
	}
	public create(uniqueState): void {
		const a = this.state;
		const b = uniqueState;
		console.log(a, b)
	}
}


class FlyweightFactory {
	private flyweights: any;
	constructor(initialFlyweights: string[]) {

	}
}

