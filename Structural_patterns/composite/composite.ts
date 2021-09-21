interface IProduct {
	getPrice(): number;
}

class Product implements IProduct {
	constructor(private price: number) { }

	public getPrice(): number {
		return this.price;
	}
}

interface IPackage extends IProduct {
	getProducts(): IProduct[];
}

class Package implements IPackage {

	constructor(
		private price: number,
		private products: IProduct[]
	) { }

	public getProducts(): IProduct[] {
		return this.products;
	}

	public getPrice(): number {
		let totalPrice = this.price;

		for (let product of this.getProducts()) {
			totalPrice += product.getPrice();
		}

		return totalPrice;

	}

}

const pen = new Product(10);
const phone = new Product(500);
const notebook = new Product(1000);


const smallPackage = new Package(2, [pen]);
const mediumPackage = new Package(1, [phone, smallPackage]);
const largePackage = new Package(2, [notebook, mediumPackage]);

console.log(`Total Price: ${largePackage.getPrice()}$`);
