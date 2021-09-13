interface ISort {
	sort(data: number[]): number[];
}

class StandartSort implements ISort {
	public sort(data: number[]): number[] {
		return data.sort();
	}
}

class ReverseSort implements ISort {
	public sort(data: number[]): number[] {
		return data.reverse();
	}
}

class Sorter {
	private sorter: ISort;
	constructor(sorter: ISort) {
		this.sorter = sorter;
	}

	public setSort(data: ISort) {
		this.sorter = data;
	}

	public sort(): void {
		const result = this.sorter.sort([1, 2, 3, 4, 5])
		console.log(result)
	}
}

const sorter = new Sorter(new StandartSort())
sorter.sort()
sorter.setSort(new ReverseSort())
sorter.sort()


