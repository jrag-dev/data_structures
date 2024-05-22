import { Tree3 } from "./Tree3";


const objTree3 = new Tree3(
  "a",
  new Tree3(
    "b",
    new Tree3(
      "d",
      new Tree3("j", null, null, null),
      new Tree3("k", null, null, null),
      null
    ),
    new Tree3("e", null, null, null),
    null
  ),
  new Tree3(
    "c",
    new Tree3("f", null, null, null),
    new Tree3("g", null, null, null),
    null
  ),
  new Tree3(
    "b",
    new Tree3("h", null, null, null),
    new Tree3(
      "i",
      new Tree3("m", null, null, null),
      null,
      null
    ),
    null
  )
)

console.log("Pre-Order: ", objTree3.preorder())
console.log("In-Order: ", objTree3.inorder())
console.log("Pos-Order: ", objTree3.posorder())
