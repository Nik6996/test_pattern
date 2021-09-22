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
	constructor(protected door: IDoor) { }

	public open(password: string): void {
		if (this.authenticate(password) === true) {
			this.door.open()
		} else {
			console.log('Неверный пароль, дверь не открыта')
		}
	}

	private authenticate(password: string): boolean {
		if (password === '1111') {
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

securityDoor.open('1111')
securityDoor.close()



