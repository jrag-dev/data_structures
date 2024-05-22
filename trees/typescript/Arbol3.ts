
type ArbolType<T> = Arbol3<T>
type ArbolMainType<T> = ArbolType<T> | null


export class Arbol3<T> {
  private _key: T
  private _left: ArbolMainType<T>
  private _right1: ArbolMainType<T>
  private _right2: ArbolMainType<T>

  constructor(_key: T, _left: ArbolMainType<T>, _right1: ArbolMainType<T>, _right2: ArbolMainType<T>) {
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

  get left(): ArbolMainType<T> {
    return this._left
  }

  set left(_left: ArbolMainType<T>) {
    this._left = _left
  }

  get right1(): ArbolMainType<T> {
    return this._right1
  }

  set right1(_right1: ArbolMainType<T>) {
    this._right1 = _right1
  }

  get right2(): ArbolMainType<T> {
    return this._right2
  }

  set right2(_right2: ArbolMainType<T>) {
    this._right2 = _right2
  }
}
