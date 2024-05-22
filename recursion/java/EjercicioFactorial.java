import java.util.Scanner;
import java.util.LinkedList;


public class EjercicioFactorial {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Factorial objFactorial = new Factorial();

    System.out.print("\nIngrese el valor de n: ");
    int n = scanner.nextInt();

    LinkedList<Long> items = new LinkedList<Long>();
    LinkedList<Long> items1 = new LinkedList<Long>();

    for (int i = 0; i <= n; i++) {
      items.add(objFactorial.calcularFactorial(i));
    }

    System.out.println(items.toString());

    LinkedList<Long> listaFactorialResult = listaFactorial(n, items1, objFactorial);
    System.out.println(listaFactorialResult);

  }

  public static LinkedList<Long> listaFactorial(long n, LinkedList<Long> l, Factorial fact) {
    if (n == 0 || n == 1) {
      l.add(0, fact.calcularFactorial(n));
      return l;
    }
    else {
      l.add(0, fact.calcularFactorial(n));
      return listaFactorial(n-1, l, fact);
    }
  }
}

class Factorial {
  public long calcularFactorial(long n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    else {
      return n * calcularFactorial(n-1);
    }
  }
}
