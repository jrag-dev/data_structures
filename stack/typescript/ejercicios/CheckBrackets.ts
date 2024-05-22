import { StackClass } from "./StackClass";

function checkBrackets(expression: string): boolean {
  const bracketsStack = new StackClass<string>(expression.length);

  for (let i = 0; i < expression.length; i++) {
    let x = expression.charAt(i);
    if (x === '(' || x === '[' || x === '{') {
      bracketsStack.push(x)
      continue;
    }

    if (bracketsStack.isEmpty()) {
      return false;
    }
    
    let check = '';
    switch(x) {
      case ')':
        check = bracketsStack.pop();
        if (check === '{' || check === '[') {
          return false;
        }
        break;

      case '}':
        check = bracketsStack.pop();
        if (check === '(' || check === '[') {
          return false;
        }
        break;

      case ']':
        check = bracketsStack.pop();
        if (check === '{' || check === '(') {
          return false;
        }
        break;
    }
  }
  return bracketsStack.isEmpty();
}

const isChecked: boolean = checkBrackets("a{b[c]d}e")
if (isChecked) {
  console.log("Expresión Balanciada!!")
} else {
  console.log("Expresión no  balanciada!!")
}