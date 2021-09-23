
class Auto {
	constructor(private model: string) {
	}
}

class AutoFactory {
	private models: any = [];

	public create(name: string): Auto {
		let model = this.models[name];
		if (model) {
			return model
		} else {
			this.models[name] = new Auto(name);
		}
		return this.models[name]
	}
	public getModels() {
		console.log(this.models)
	}
}


const factory = new AutoFactory()
const audi = factory.create('audi');
const tesla = factory.create('tesla')
const tesla2 = factory.create('tesla')

console.log(factory.getModels())