
public class MainArbol {

  public static void main(String[] args) {

    Arbol objArbol = new Arbol(
        "a",
        new Arbol(
          "b",
          new Arbol("d", null, null),
          new Arbol("e", null, null)
          ),
        new Arbol(
          "c",
          new Arbol(
            "f", null, null
          ),
          new Arbol(
            "g",
            new Arbol("k", null, null),
            null
          )
        )
    );

    System.out.println(objArbol);
    System.out.println(objArbol.getKey());
    System.out.println(objArbol.getLeft().getKey());
    System.out.println(objArbol.getRight().getKey());
  }
}
