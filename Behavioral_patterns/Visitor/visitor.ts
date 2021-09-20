interface ICars {
	checkTaxes(agent: ITaxAgent): void;
	price(): number;
}

class CarBmw implements ICars {
	public checkTaxes(agent: ITaxAgent): void {
		agent.checkTaxesForBmw(this)
	}

	public price(): number {
		return 1000
	}
}

class CarAudi implements ICars {
	public checkTaxes(agent: ITaxAgent): void {
		agent.checkTaxesForAudi(this)
	}

	public price(): number {
		return 2000
	}
}


interface ITaxAgent {
	checkTaxesForBmw(data: CarBmw): void;
	checkTaxesForAudi(data: CarAudi): void;
}



class TaxAgent implements ITaxAgent {
	public checkTaxesForBmw(data: CarBmw): void {
		console.log(`цена BMW ${data.price()}`)
	}
	public checkTaxesForAudi(data: CarAudi): void {
		console.log(`цена Audi ${data.price()}`)
	}
}

const carBmw = new CarBmw();
const carAudi = new CarAudi();

const agent = new TaxAgent();
agent.checkTaxesForBmw(carBmw);
agent.checkTaxesForAudi(carAudi);

