
def suma_enteros(n):
    if n == 1:
        return 1
    else:
        return n + suma_enteros(n-1)


n = int(input("Ingrese el valor de n: "))

s = suma_enteros(n)

print(s)
