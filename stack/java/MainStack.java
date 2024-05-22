public class MainStack {
  public static void main(String[] args) {
    StackCustom myStack = new StackCustom(10);

    myStack.push(1);
    myStack.push(0);
    myStack.push(3);
    myStack.push(6);

    System.out.println(myStack.getSize());
    myStack.setCapacity(12);
    myStack.showStack();
  }
}