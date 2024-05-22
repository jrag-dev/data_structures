
def fact(n):
    if (n == 1 or n == 0):
        return 1
    else:
        return n*fact(n-1)


n = 5
resultado = fact(5)
print(f'Factorial({n}) = {resultado}')
print(f'Factorial({9}) = {fact(9)}')
print(f'Factorial({12}) = {fact(12)}')
print(f'Factorial({20}) = {fact(20)}')
