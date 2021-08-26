


interface ICarAdapter1 {
	create(): void
}


class TestAdapter1 implements ICarAdapter1 {
	public create(): string {
		return 'new car'
	}
}

interface ICarAdapter2 {
	info(): void
}

class TestAdapter2 implements ICarAdapter2 {
	public info(): string {
		return 'info car'
	}
}

class Adapter extends TestAdapter2 {
	private forAdapter: TestAdapter2
	constructor(forAdapter: TestAdapter2) {
		super()
		this.forAdapter = forAdapter
	}

	public request(): string {
		let result = this.forAdapter.info();
		return result
	}
}



