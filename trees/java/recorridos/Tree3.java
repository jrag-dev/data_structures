import java.util.LinkedList;


public class Tree3 {
  private String key;
  private Tree3 left;
  private Tree3 right1;
  private Tree3 right2;

  public Tree3(String key, Tree3 left, Tree3 right1, Tree3 right2) {
    this.key = key;
    this.left = left;
    this.right1 = right1;
    this.right2 = right2;
  }
  
  public String getKey() {
    return this.key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public Tree3 getLeft() {
    return this.left;
  }

  public void setLeft(Tree3 left) {
    this.left = left;
  }

  public Tree3 getRight1() {
    return this.right1;
  }

  public void setRight1(Tree3 right1) {
    this.right1 = right1;
  }
  
  public Tree3 getRight2() {
    return this.right2;
  }

  public void setRight2(Tree3 right2) {
    this.right2 = right2;
  }

  public LinkedList<String> preorder() {
    LinkedList<String> list = new LinkedList<String>();

    list.add(this.key);

    if (this.left != null) {
      LinkedList<String> left = this.left.preorder();
      list.addAll(left);
    }

    if (this.right1 != null) {
      LinkedList<String> right1 = this.right1.preorder();
      list.addAll(right1);
    }

    if (this.right2 != null) {
      LinkedList<String> right2 = this.right2.preorder();
      list.addAll(right2);
    }

    return list;
  }

  public LinkedList<String> inorder() {
    LinkedList<String> list = new LinkedList<String>();

    if (this.left != null) {
      LinkedList<String> left = this.left.inorder();
      list.addAll(left);
    }
    
    list.add(this.key);

    if (this.right1 != null) {
      LinkedList<String> right1 = this.right1.inorder();
      list.addAll(right1);
    }

    if (this.right2 != null) {
      LinkedList<String> right2 = this.right2.inorder();
      list.addAll(right2);
    }

    return list;
  }

  public LinkedList<String> posorder() {
    LinkedList<String> list = new LinkedList<String>();

    if (this.left != null) {
      LinkedList<String> left = this.left.posorder();
      list.addAll(left);
    }
    
    if (this.right1 != null) {
      LinkedList<String> right1 = this.right1.posorder();
      list.addAll(right1);
    }

    if (this.right2 != null) {
      LinkedList<String> right2 = this.right2.posorder();
      list.addAll(right2);
    }
    
    list.add(this.key);

    return list;
  }

}
