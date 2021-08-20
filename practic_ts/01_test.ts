

const int: number = 44


const numberArray: number[] = [1, 1, 2, 3, 5, 8];

//Tuple

const contact: [string, number] = ['name', 123345];

//Any

let variable: any = 20;
variable = 'text';

// Type
type Login = string
const login: Login = 'text'

type ID = string | number

let id1: ID = 111;
let id2: ID = 'text';

//======================================INTERFACES================================================

interface Rect {
	readonly id: string
	color: string
	size: {
		width: number
		height: number
	}
}

let rect1: Rect = {
	id: 'text',
	color: 'black',
	size: {
		width: 44,
		height: 11
	}
}

const rect2 = {} as Rect
const rect4 = <Rect>{}

//==========================НАСЛЕДОВАНИЕ ИНТЕРФЕЙСА=========================
//Интерфейс определяет свойства и методы, которые объект должен реализовать
interface RectAria extends Rect {
	getAria: () => number
}

const rect5: RectAria = {
	id: '121',
	color: 'red',
	size: {
		width: 30,
		height: 40
	},
	getAria(): number {
		return this.size.width * this.size.height
	}
}

//ИМПЛЕМЕНТАЦИЯ============

interface ITime {
	time: Date
	setTime(date: Date): void
}

class Clock implements ITime {
	time: Date = new Date()
	setTime(date: Date): void {
		this.time = date
	}
}

//ENUMS

enum Membership {
	Simple = 1000,
	Standart = 2000,
	Premium = 3000
}

const member = Membership.Premium












