

public class MainArbol4 {
  public static void main(String[] args) {
    
    Arbol4 objArbol4 = new Arbol4(
      1,
      new Arbol4(
          2,
          new Arbol4(6, null, null, null, null),
          new Arbol4(7, null, null, null, null),
          new Arbol4(8, null, null, null, null),
          null
      ),
      new Arbol4(
          3,
          new Arbol4(9, null, null, null, null),
          null,
          null,
          null
      ),
      new Arbol4(
          4,
          new Arbol4(10, null, null, null, null),
          null,
          null,
          null
      ),
      new Arbol4(
          5,
          new Arbol4(11, null, null, null, null),
          new Arbol4(12, null, null, null, null),
          null,
          null
      )
    );

    System.out.println(objArbol4.getKey());
    System.out.println(objArbol4.getLeft().getKey());
    System.out.println(objArbol4.getLeft().getLeft().getKey());
    System.out.println(objArbol4.getLeft().getRight1().getKey());
    System.out.println(objArbol4.getLeft().getRight2().getKey());
    System.out.println(objArbol4.getLeft().getRight3().getKey());
  }
}
