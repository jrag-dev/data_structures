
class StackCustom:
  def __init__(self, capacity) -> None:
    self.top = -1
    self.arr = []
    self.capacity = capacity
  
  def is_empty(self):
    return self.top == -1
  
  def size(self):
    return self.top + 1
  
  def push(self, x):
    if self.top < self.capacity - 1:
      self.top += 1
      self.arr.append(x)
    else:
      print("Overflow")

  def pop(self):
    if self.top >= 0:
      self.top -= 1
    else:
      print("Underflow")
      
  def display(self):
    for item in self.arr:
      print(item)


# Pruebas

stack = StackCustom(5)
print("The stack is empty" if stack.is_empty() == True else "The stack isn't empty")
stack.push(1)
stack.push(3)
stack.push(5)
stack.push(8)
stack.push(9)
stack.push(11)
stack.display()
print("The stack is empty" if stack.is_empty() == True else "The stack isn't empty")
print("Size: ", stack.size())
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()