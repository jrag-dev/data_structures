import { Stack } from "./Stack";


const numberStack = new Stack<number>(10);

console.log("\nTamaño de Stack: ", numberStack.getSize())
console.log("Esta vacio el Stack? ", numberStack.isEmpty())
console.log("Esta lleno el Stack? ", numberStack.isFull())
numberStack.showStack()

// Insertando datos en el Stack
numberStack.push(1)
numberStack.push(2)
console.log("\nTamaño de Stack: ", numberStack.getSize())
console.log("Esta vacio el Stack? ", numberStack.isEmpty())
console.log("Esta lleno el Stack? ", numberStack.isFull())
numberStack.showStack()

// Insertando datos en el Stack
numberStack.push(4)
numberStack.push(7)
console.log("\nTamaño de Stack: ", numberStack.getSize())
console.log("Esta vacio el Stack? ", numberStack.isEmpty())
console.log("Esta lleno el Stack? ", numberStack.isFull())
numberStack.showStack()

numberStack.pop()
numberStack.showStack()

// Insertando datos en el Stack
numberStack.push(5)
numberStack.push(6)
numberStack.push(8)
numberStack.push(9)
numberStack.showStack()
