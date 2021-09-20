interface INews {
	setNews(text: string): void;
	register(observer: Observer): void;
	unregister(observer: Observer): void;
}

class News implements INews {
	private news: string;
	private actions: Observer[];

	constructor() {
		this.news = '';
		this.actions = [];
	}

	public setNews(text: string): void {
		this.news = text;
		this.notify();
	}

	private notify(): void {
		return this.actions.forEach(element => element.info(this.news))
	}

	public register(observer: Observer): void {
		this.actions.push(observer);
	}
	public unregister(observer: Observer): void {
		this.actions = this.actions.splice(this.actions.indexOf(observer))
	}
}

interface Observer {
	info(message: string): void;
}

class NickObserver implements Observer {
	info(message: string): void {
		console.log(`Новая новость для Ника: ${message} `)
	}
}

class MaxObserver implements Observer {
	info(message: string): void {
		console.log(`Новая новость для Макса: ${message}`)
	}
}

const news = new News()
news.register(new NickObserver())
news.register(new MaxObserver())

news.setNews('какая то новость')
