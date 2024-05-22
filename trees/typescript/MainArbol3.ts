import { Arbol3 } from "./Arbol3";


const objArbol3 = new Arbol3(
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
)

console.log(objArbol3)
console.log(objArbol3.key)
console.log(objArbol3.left)
console.log(objArbol3.right1)
console.log(objArbol3.right2)
