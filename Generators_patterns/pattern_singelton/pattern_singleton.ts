
class Connection {
	private static instance: Connection;

	public static getInstance(): Connection {
		if (!Connection.instance) {
			Connection.instance = new Connection();
		}
		return Connection.instance;
	}

	private id: number;

	private constructor() {
		this.id = 1;
	}

	getId(): number {
		return this.id
	}

	setId(id: number): void {
		if (id > 5) {
			this.id = id;
		} else {
			this.id = 5;
		}
	}
}

let connection: Connection = Connection.getInstance();
connection.setId(2);


console.log(connection.getId())

let connection2 = Connection.getInstance()
connection2.setId(7);
console.log(connection2.getId())


