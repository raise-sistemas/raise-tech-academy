type RowCol = {
  row: number;
  col: number;
};

type RowColVal<T> = RowCol & {
  val: T;
};

// class Foo<T> {
//   #bar: T
//   constructor() {
//     this.#bar = null;
//   }
// }

export class Grid<T> {
  #rows = 0;
  #cols = 0;
  #array: (T | null)[] = [];

  constructor(rows = 3, cols = 3) {
    this.#rows = rows;
    this.#cols = cols;
    this.#array = new Array<T | null>(rows * cols);
    this.clearAll();
  }

  toIndex(row = 0, col = 0) {
    return row * this.#cols + col;
  }

  fromIndex(index = 0): RowColVal<T | null> {
    const row = Math.ceil(index / this.#rows);
    const col = index - row * this.#cols;
    const val = this.#array[index];
    return { row, col, val };
  }

  validateRowCol(row = 0, col = 0) {
    if (row >= this.#rows || row < 0)
      throw `invalid row ${row} for rows: ${this.#rows}`;
    if (col >= this.#cols || col < 0)
      throw `invalid col ${col} for cols: ${this.#cols}`;
  }

  get rows() {
    return this.#rows;
  }

  get cols() {
    return this.#cols;
  }

  get arrayOfRows() {
    return Array.from(this);
  }

  get({ row, col }: RowCol) {
    this.validateRowCol(row, col);
    return this.#array[this.toIndex(row, col)];
  }

  set({ row, col, val }: RowColVal<T | null>) {
    this.validateRowCol(row, col);
    this.#array[this.toIndex(row, col)] = val;
  }

  clearAll() {
    this.#array.fill(null);
  }

  clearAt({ row, col }: RowCol) {
    this.set({ row, col, val: null });
  }

  rowAt(row = 0) {
    return this.#array.slice(row * this.#cols, (row + 1) * this.#cols);
  }

  *[Symbol.iterator]() {
    for (let row = 0; row < this.#rows; row++) {
      yield this.rowAt(row);
    }
  }
}
