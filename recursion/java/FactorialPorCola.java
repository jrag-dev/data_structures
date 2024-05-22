
public class FactorialPorCola {
  public static void main(String[] args) {
    Factorial obj = new Factorial();

    long n = 10;

    for (int i = 1; i <= n; i++) {
      System.out.println(obj.calcularFactorial(i, 1));
    }
  }
}

class Factorial {
  public long calcularFactorial(long n, long res) {
    if (n == 1) {
      return res;
    } else {
      return calcularFactorial(n - 1, res * n);
    }
  }
}
