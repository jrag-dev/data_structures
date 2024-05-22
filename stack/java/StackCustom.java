class StackCustom {
  private int[] arr;
  private int top;
  private int capacity;

  public StackCustom(int capacity) {
    this.capacity = capacity;
    this.top = -1;
    this.arr = new int[capacity];
  }

  public int[] getArr() {
    return arr;
  }

  public void setArr(int[] arr) {
    this.arr = arr;
  }

  public int getTop() {
    return top;
  }

  public void setTop(int top) {
    this.top = top;
  }

  public int getCapacity() {
    return capacity;
  }

  public void setCapacity(int capacity) {
    this.capacity = capacity;
  }

  public int getSize() {
    return (this.top > 0) ? this.top + 1 : 0;
  }

  public boolean isEmpty() {
    return this.top < 0;
  }

  public boolean isFull() {
    return this.top >= this.capacity - 1;
  }

  public void push(int value) {
    if (this.isFull()) {
      System.out.println("El Stack está lleno.");
    } else {
      this.arr[++this.top] = value;
    }
    this.showStack();
  }

  public int pop() {
    if (this.isEmpty()) {
      System.out.println("El Stack esta vacío.");
      System.exit(-1);
    }
    return this.arr[this.top--];
  }

  public void showStack() {
    System.out.println("\nEstado Actual del Stack: \n");
    for (int i = this.capacity; i > this.arr.length; i--) {
      System.out.println("| " + " " + " |");
    }
    for (int i = this.arr.length - 1; i >= 0; i--) {
      if (i == this.top) {
        System.out.println("| " + this.arr[i] + " |" + " -> " + " TOP");
      } else {
        System.out.println("| " + this.arr[i] + " |");
      }
    }
    System.out.println("_____\n");
  }
}