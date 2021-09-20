interface ILogIn {
	loginName(): void
}

class User1 implements ILogIn {
	private pass: string;

	public loginName(): void {
		console.log('user1')
	}

	public setPass(pass: string): void {
		this.pass = pass
	}
	public getPass(): string {
		return this.pass
	}
}

class Proxy implements ILogIn {
	private user1: User1;
	constructor(user: User1) {
		this.user1 = user;
	}

	public loginName(): void {
		if (this.password() === true) {
			this.open()
		} else this.closet()
	}

	private password(): boolean {
		if (this.user1.getPass() === '1111') {
			return true
		} return false
	}
	private open(): void {
		console.log(`вход выполнен`)
	}

	private closet(): void {
		console.log('неверный пароль')
	}


}

const user1 = new User1()
user1.setPass('1111')

const proxy = new Proxy(user1);
proxy.loginName()




