type ArbolType<T> = Arbol<T>
type ArbolMainType<T> = ArbolType<T> | null


export class Arbol<T> {
  private _key: T
  private _left: ArbolMainType<T>
  private _right: ArbolMainType<T>

  constructor(_key: T, _left: ArbolMainType<T>, _right: ArbolMainType<T>) {
    this._key = _key
    this._left = _left
    this._right = _right
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

  get right(): ArbolMainType<T> {
    return this._right
  }

  set right(_right: ArbolMainType<T>) {
    this._right = _right
  }
}
