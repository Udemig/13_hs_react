class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<number>([3, 4, 5, 1, 2]);
const arr2 = new Sorter<string>(["c", "d", "e", "a", "b"]);

console.log(arr1.sortData());
console.log(arr2.sortData());
