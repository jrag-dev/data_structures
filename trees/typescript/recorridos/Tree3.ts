/*
 * Implementación de los distintos recorridos
 *  Pre-order
 *  In-order
 *  Pos-order
 * en árboles 3-ario. Usé arrays para retornar
 * los recorridos.
 *
 * By Jose Alvarado <josealvarado2117@gmail.com>
 * created_at: 05-05-2024
 * hour: 03:35 am
*/



type Tree3Type<T> = Tree3<T>

type Tree3FullType<T> = Tree3Type<T> | null


export class Tree3<T> {
  private _key: T
  private _left: Tree3FullType<T>
  private _right1: Tree3FullType<T>
  private _right2: Tree3FullType<T>

  constructor(_key: T, _left: Tree3FullType<T>, _right1: Tree3FullType<T>, _right2: Tree3FullType<T>) {
    this._key = _key
    this._left = _left
    this._right1 = _right1
    this._right2 = _right2
  }

  get key(): T {
    return this._key
  }

  set key(_key: T) {
    this._key = _key
  }

  get left(): Tree3FullType<T> {
    return this._left
  }

  set left(_left: Tree3FullType<T>) {
    this._left = _left
  }

  get right1(): Tree3FullType<T> {
    return this._right1
  }

  set right1(_right1: Tree3FullType<T>) {
    this._right1 = _right1
  }

  get right2(): Tree3FullType<T> {
    return this._right2
  }

  set right2(_right2: Tree3FullType<T>) {
    this._right2 = _right2
  }

  public preorder(): T[] {
    let output: T[] = []
    let leftL: T[] = []
    let right1L: T[] = []
    let right2L: T[] = []

    output.push(this._key)

    if (this._left !== null) {
      leftL = this._left.preorder()
    }

    for (const l of leftL) {
      output.push(l)
    }

    if (this._right1 !== null) {
      right1L = this._right1.preorder()
    }

    for (const r1 of right1L) {
      output.push(r1)
    }

    if (this._right2 !== null) {
      right2L = this._right2.preorder()
    }

    for (const r2 of right2L) {
      output.push(r2)
    }

    return output
  }

  public inorder(): T[] {
    let output: T[] = []
    let leftL: T[] = []
    let right1L: T[] = []
    let right2L: T[] = []

    if (this._left !== null) {
      leftL = this._left.inorder()
    }

    for (const l of leftL) {
      output.push(l)
    }

    output.push(this._key)

    if (this._right1 !== null) {
      right1L = this._right1.inorder()
    }

    for (const r1 of right1L) {
      output.push(r1)
    }

    if (this._right2 !== null) {
      right2L = this._right2.inorder()
    }

    for (const r2 of right2L) {
      output.push(r2)
    }

    return output
  }

  public posorder(): T[] {
    let output: T[] = []
    let leftL: T[] = []
    let right1L: T[] = []
    let right2L: T[] = []

    if (this._left !== null) {
      leftL = this._left.posorder()
    }

    for (const l of leftL) {
      output.push(l)
    }

    if (this._right1 !== null) {
      right1L = this._right1.posorder()
    }

    for (const r1 of right1L) {
      output.push(r1)
    }

    if (this._right2 !== null) {
      right2L = this._right2.posorder()
    }

    for (const r2 of right2L) {
      output.push(r2)
    }

    output.push(this._key)

    return output
  }

}
