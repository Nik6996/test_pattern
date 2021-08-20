
class Connection {

	public static getInstance(): Connection {
		//console.log('getInstance');
		if (!Connection.instance) {
			Connection.instance = new Connection();
		}
		return Connection.instance;
	}
	private static instance: Connection;
	private id: number;
	private constructor() {
		this.id = 1;
	}



	getId(): number {
		return this.id
	}

	setId(id: number): void {
		if (id > 0) {
			this.id = id;
		}

	}
}

let connection: Connection = Connection.getInstance();
connection.setId(2);


console.log(connection.getId())

let connection2 = Connection.getInstance()
connection2.setId(3);
console.log(connection2.getId())


