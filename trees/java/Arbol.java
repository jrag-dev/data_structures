
public class Arbol {
  private String key;
  private Arbol left;
  private Arbol right;

  public Arbol(String key, Arbol left, Arbol right) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  public String getKey() {
    return this.key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public Arbol getLeft() {
    return this.left;
  }

  public void setLeft(Arbol left) {
    this.left = left;
  }

  public Arbol getRight() {
    return this.right;
  }

  public void setRight(Arbol right) {
    this.right = right;
  }
}
