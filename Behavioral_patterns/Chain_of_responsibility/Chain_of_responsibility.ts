
abstract class Account {
	user: Account;
	abstract balance: number;

	public setNext(account: Account) {
		this.user = account;
		return account;
	}
	public pay(amountToPay: number) {
		if (this.canPay(amountToPay)) {
			console.log(`Оплачено ${amountToPay} `);
		}
		else if (this.user) {
			console.log(`Не оплачено`);
			this.user.pay(amountToPay);
		} else {
			console.log('Недостаточно средств')
		}
	}
	public canPay(amount: number): boolean {
		return this.balance >= amount;
	}
}


class Bank extends Account {
	balance: number

	constructor(balance: number) {
		super()
		this.balance = balance
	}
}

class Paypal extends Account {
	balance: number
	constructor(balance: number) {
		super()
		this.balance = balance
	}
}

class Bitcoin extends Account {
	balance: number
	constructor(balance: number) {
		super()
		this.balance = balance
	}
}


let bank = new Bank(100)
let paypal = new Paypal(200)
let bitcoin = new Bitcoin(400)


bank.setNext(paypal).setNext(bitcoin);

bank.pay(300)