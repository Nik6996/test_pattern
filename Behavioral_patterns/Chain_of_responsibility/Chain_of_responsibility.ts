

interface ILogin {
	setNext(login: ILogin): ILogin;
	name(request: string): string;
}

abstract class AbstractLogin implements ILogin {
	private nextStep: ILogin;

	public setNext(login: ILogin): ILogin {
		this.nextStep = login;
		return login;
	}

	public name(request: string): string {
		if (this.nextStep) {
			return this.nextStep.name(request);
		}
		return null
	}

}

class User1 extends AbstractLogin {
	public name(request: string): string {
		if (request === 'Иван') {
			return `Имя ${request} возраст 25.`;
		}
		return super.name(request)
	}
}

class User2 extends AbstractLogin {
	public name(request: string): string {
		if (request === 'Миша') {
			return `имя ${request} возраст 33.`;
		}
		return super.name(request)
	}
}

class User3 extends AbstractLogin {
	public name(request: string): string {
		if (request === 'Саша') {
			return `имя ${request} возраст 33.`;
		}
		return super.name(request)
	}
}


function user(userName: ILogin) {
	const users = ['Миша', 'Сергей', 'Иван', 'Саша']
	for (const user of users) {
		console.log(`Твое имя ${user}?`)

		const result = userName.name(user)
		if (result) {
			console.log(`${result}`)
		}
		else {
			console.log(`${user} не найден`)
		}
	}
}

let user1 = new User1();
let user2 = new User2();
let user3 = new User3();

user1.setNext(user2).setNext(user3);

user(user1);
