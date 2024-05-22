
public class Ejemplo1 {
  public static void main(String[] args) {
    int value = funcion(5);
    System.out.println("Valor: " + value);
  }

  public static int funcion(int a) {
    if (a == 0) {
      return 1;
    }
    else {
      return 1 + funcion(a - 1);
    }
  }
}
