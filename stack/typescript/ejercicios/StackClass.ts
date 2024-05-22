interface IStack<T> {
  arr: T[];
  top: number;
  capacity: number;

  getSize: () => number;
  isEmpty: () => boolean;
  isFull: () => boolean;
  push: (value: T) => void;
  pop: () => T | null;
  peek: () => T;
  getStack: () => T[];
  showStack: () => void;
}


export class StackClass<T> implements IStack<T> {
  arr: T[];
  top: number;
  capacity: number;
  
  constructor(capacity: number) {
    this.arr = [];
    this.top = -1;
    this.capacity = capacity;
  }

  getSize(): number {
    return this.top > 0 ? this.top + 1 : 0
  }

  isEmpty(): boolean {
    return this.top < 0;
  }

  isFull(): boolean {
    return this.top >= this.capacity;
  }

  push(value: T): void {
    if (this.isFull()) {
      console.log("El Stack esta lleno.")
      return;
    }
    this.arr[++this.top] = value;
  }

  pop(): T {
    const deleted = this.arr[this.top];
    if (!this.isEmpty()) {
      this.arr.splice(this.top, 1);
      this.top--;
    }
    return deleted;
  }

  peek(): T {
    return this.arr[this.top];
  }

  getStack(): T[] {
    let output: T[] = [];
    for (let i = 0; i < this.arr.length; i++) {
      output.push(this.peek());
      this.top--;
    }
    return output;
  }

  showStack(): void {
    console.log("\nEstado Actual del Stack: \n")
    for (let i = this.capacity; i > this.arr.length; i--) {
      console.log("| " + " " + " |")
    }
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (i === this.top) {        
        console.log("| " + this.arr[i] + " |" + " -> " + " TOP")
      }
      else {
      console.log("| " + this.arr[i] + " |")
      }
    }
    console.log("_____\n")
  }
}