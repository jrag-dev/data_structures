from math import sqrt

def fibonnacci(n):
    if n == 0:
        return 0

    if n == 1:
        return 1
    else:
        return fibonnacci(n-1) + fibonnacci(n-2)

def fibonnacci_explicito(n):
    b = 1/(sqrt(5))
    d = -1/(sqrt(5))
    b1 = ((1+sqrt(5))/2)**n
    d1 = ((1-sqrt(5))/2)**n
    return round(b*b1 + d*d1)

for i in range(2, 20):
    print(f'F({i}) = {fibonnacci(i)} <-> {fibonnacci_explicito(i)}')
