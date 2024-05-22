
export class TwoStacks<T> {
  private arr: T[];
  private top1: number;
  private top2: number;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.top1 = Math.floor(capacity/2);
    this.top2 = Math.floor(capacity/2) - 1;
    this.arr = new Array<T>(this.capacity);
  }

  public push1(x: T): void {
    if (this.top1 > 0) {
      this.top1--;
      this.arr[this.top1] = x;
    }
    else {
      console.log("Stack Overflow.")
    }
  }
  
  public push2(x: T): void {
    if (this.top2 < this.capacity - 1) {
      this.top2++;
      this.arr[this.top2] = x;
    }
    else {
      console.log("Stack Overflow.")
    }
  }

  public pop1(): T | null {
    if (this.top1 <= this.capacity/2) {
      const item = this.arr[this.top1];
      delete this.arr[this.top1];
      this.top1++;
      return item;
    }
    else {
      console.log("Stack Underflow")
    }
    return null;
  }

  public pop2(): T | null {
    if (this.top2 >= (this.capacity)/2) {
      const item = this.arr[this.top2];
      delete this.arr[this.top2];
      this.top2--;
      return item;
    }
    else {
      console.log("Stack Underflow")
    }
    return null;
  }
}

const stack = new TwoStacks(10);

stack.push1("Anma")
stack.push1("Beatriz")
stack.push1("Carmen")

stack.push2("Tania")
stack.push2("Sara")
console.log(stack)

stack.pop1()

stack.pop2()
stack.pop2()
stack.push2("Zuly")
stack.push2("Yale")
stack.push2("Xami")
stack.push2("Samira")
console.log(stack)