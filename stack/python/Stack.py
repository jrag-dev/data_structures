class Stack:
  def __init__(self, capacity) -> None:
    self.arr = []
    self.top = -1
    self.capacity = capacity
  
  def get_size(self) -> bool:
    return self.top + 1 if self.top > 0 else 0
  
  def is_empty(self) -> bool:
    return self.top < 0
  
  def is_full(self) -> bool:
    return self.top >= self.capacity - 1

  def push(self, value) -> None:
    if (self.is_full()):
      print("El Stack está lleno.")
      return None
    self.arr.append(value)
    self.top += 1
    self.showStack()
  
  def pop(self) -> None:
    if self.is_empty():
      print("El Stack está vacío.")
      return None
    del self.arr[self.top]
    self.top -= 1
    self.showStack()
    
  def showStack(self) -> None:
    print("\nDiagrama del Stack: \n")
    for i in range(len(self.arr), self.capacity):
      print("\t|  " + " " + "  |")
    
    j = len(self.arr) - 1
    while(j >= 0):
      if j == self.top:
        print("\t| ", self.arr[j],  " |" + " -> " + " TOP")
      else:
        print("\t| ", self.arr[j],  " |")
      j -= 1
    print("\t|_____|")