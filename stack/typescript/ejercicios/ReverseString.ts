import { StackClass } from "./StackClass";

const input: string = "GeeksQuiz";

function reverseString(value: string): string {
  const stack = new StackClass(value.length);
  for (let item of value) {
    stack.push(item);
  }
  const valueReverse = stack.getStack();
  return valueReverse.join("")
}

const stringReverse: string = reverseString(input);
console.log("String Original: ", input, "\nString Invertido: ", stringReverse)