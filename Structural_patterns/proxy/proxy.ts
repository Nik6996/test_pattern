interface IDoor {
	open(): void;
	close(): void;
}

class Door implements IDoor {
	public open(): void {
		console.log('Дверь открыта')
	}
	public close(): void {
		console.log('Дверь закрыта')
	}
}

class SecurityDoor {
	private password: string
	constructor(protected door: IDoor) { }

	public open(): void {
		if (this.authenticate() === true) {
			this.door.open()
		} else {
			console.log('Неверный пароль, дверь не открыта')
		}
	}

	public setPassword(password: string): void {
		this.password = password
	}

	private authenticate(): boolean {
		if (this.password === '1111') {
			return true
		}
		return false
	}
	public close(): void {
		this.door.close()
	}
}

let door = new Door()
let securityDoor = new SecurityDoor(door)

securityDoor.setPassword('1111')
securityDoor.open()
securityDoor.close()



