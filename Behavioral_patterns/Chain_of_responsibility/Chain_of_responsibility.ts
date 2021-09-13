interface IAccount {
	setNext(account: IAccount): IAccount;
	pay(amountToPay: number): boolean;
	canPay(amount: number): boolean;
	balance: number;
}


abstract class Account implements IAccount {
	private nextAccount: IAccount;
	public balance: number;

	public setNext(account: IAccount): IAccount {
		this.nextAccount = account;
		return account;
	}

	public pay(amountToPay: number): boolean {
		if (this.canPay(amountToPay)) {
			console.log('Оплата прошла успешно')
			return true
		}

		if (this.nextAccount) {
			console.log('Оплата не удалась')
			return this.nextAccount.pay(amountToPay);
		}
		console.log('Недостаточно средств')
		return false
	}

	public canPay(amount: number): boolean {
		return this.balance >= amount;
	}
}


class BankAccount extends Account {
	balance: number

	constructor(balance: number) {
		super()
		this.balance = balance
	}
}

class PaypalAccount extends Account {
	balance: number
	constructor(balance: number) {
		super()
		this.balance = balance
	}
}

class BitcoinAccount extends Account {
	balance: number
	constructor(balance: number) {
		super()
		this.balance = balance
	}
}


let bank = new BankAccount(100)
let paypal = new PaypalAccount(200)
let bitcoin = new BitcoinAccount(400)


bank.setNext(paypal)
paypal.setNext(bitcoin)


bank.pay(300)