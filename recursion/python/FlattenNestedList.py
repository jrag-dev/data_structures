
lista = [1, [2, 3, 4], 5, 6, [7, 8, [9, 10]]]
lista1= [[1], [2, 3], [4, [5, [6, [7, [8]]]]]]

def flat_list(l):
    if l == []:
        return l
    if isinstance(l[0], list):
        return flat_list(l[0]) + flat_list(l[1:])
    
    return l[:1] + flat_list(l[1:])


items = flat_list(lista)
__import__('pprint').pprint(items)
__import__('pprint').pprint(flat_list(lista1))
