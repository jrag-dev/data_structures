public class Factorial {
  public static void main(String[] args) {
    int value = fact(9);
    System.out.println("Factorial(9): " + value);
  }

  public static int fact(int n) {
    if (n == 1 || n == 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
}
