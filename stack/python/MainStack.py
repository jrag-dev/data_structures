from Stack import Stack

stack = Stack(10)

print(stack.get_size())
print(stack.is_empty())
print(stack.is_full())

stack.push(1)
stack.push(2)
stack.push(4)
stack.push(6)
print(stack.get_size())
print(stack.is_empty())
print(stack.is_full())

stack.pop()
stack.push(9)
stack.push(11)
stack.push(7)
stack.push(14)
stack.push(21)
print(stack.get_size())
print(stack.is_empty())
print(stack.is_full())

stack.push(57)
stack.push(85)
stack.push(91)
stack.push(101)