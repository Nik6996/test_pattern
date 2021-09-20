interface IMediator {
	connection(event: string): void
}

class Mediator implements IMediator {
	private component1: Cat;
	private component2: Dog;
	constructor(component1: Cat, component2: Dog) {
		this.component1 = component1;
		this.component2 = component2;
		this.component1.setMediator(this);
		this.component2.setMediator(this);
	}


	public connection(event: string): void {
		if (event === 'погулять') {
			console.log(`событие ${event} выполнено`)

		}
		if (event === 'погладить') {
			console.log(`событие ${event} выполнено`)
			this.component1.eat()                        // связь
		}
		if (event === 'покормить') {
			console.log(`событие ${event} выполнено`)
		}

	}
}

class Enimal {

	constructor(protected mediator: IMediator = null) { }

	public setMediator(mediator: IMediator): void {
		this.mediator = mediator;
	}
}


class Cat extends Enimal {

	public walk(): void {
		console.log('Cat выполняет погулять')
		this.mediator.connection('погулять')
	}
	public eat(): void {
		console.log('Cat выполняет покормить')
		this.mediator.connection('покормить')
	}
}

class Dog extends Enimal {
	public pet(): void {
		console.log('Dog выполняет погладить');
		this.mediator.connection('погладить')
	}

}


const cat = new Cat()
const dog = new Dog()

const mediator = new Mediator(cat, dog)

cat.walk()
dog.pet()
