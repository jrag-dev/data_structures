
def fact(n):
    if (n == 0 or n == 1):
        return 1
    else:
        return n*fact(n-1)

def generate_list_factorial(n):
    list = []
    for i in range(0, n+1):
        dict = {"n": i, "fact": fact(i)}
        list.append(dict)

    return list


def generate_list_fact_recursiva(n, l):
    if n == 1:
        l.insert(0, fact(n))
        return l
    else:
        l.insert(0, fact(n))
        return generate_list_fact_recursiva(n-1, l)


m = int(input("Ingrese un entero positivo n: "))

fact_list = generate_list_factorial(m)
fact_list_recursiva = generate_list_fact_recursiva(m, [])

__import__('pprint').pprint(fact_list)
__import__('pprint').pprint(fact_list_recursiva)
