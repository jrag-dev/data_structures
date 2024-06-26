
public class MainArbol3 {
  public static void main(String[] args) {
    Arbol3 objArbol3 = new Arbol3(
      "a",
      new Arbol3(
        "b",
        new Arbol3("e", null, null, null),
        new Arbol3("f", null, null, null),
        new Arbol3("g", null, null, null)
      ),
      new Arbol3(
        "c",
        new Arbol3("h", null, null, null),
        null,
        null
      ),
      new Arbol3("d", null, null, null)
    );

    System.out.println(objArbol3.toString());
    System.out.println(objArbol3.getKey());
    System.out.println(objArbol3.getLeft());
    System.out.println(objArbol3.getRight1());
    System.out.println(objArbol3.getRight2());

    Arbol3 current = objArbol3;
    while (current != null) {
      System.out.println(current.getKey());
      current = current.getLeft();
    }

  }
}
