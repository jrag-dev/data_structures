import { Arbol } from "./Arbol";


const objArbol = new Arbol<string>(
  "a",
  new Arbol<string>(
    "b",
    new Arbol<string>("d", null, null),
    new Arbol<string>("e", null, null)
  ),
  new Arbol<string>(
    "c",
    new Arbol<string>("f", null, null),
    new Arbol<string>(
      "g",
      new Arbol<string>("k", null, null),
      null
    )
  )
)

console.log(objArbol)
console.log(objArbol.key)
console.log(objArbol.left)
console.log(objArbol.right)
