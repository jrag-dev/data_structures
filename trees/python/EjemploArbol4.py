from Arbol4 import Arbol4

objArbol4 = Arbol4(
    1,
    Arbol4(
        2,
        Arbol4(6, None, None, None, None),
        Arbol4(7, None, None, None, None),
        Arbol4(8, None, None, None, None),
        None
    ),
    Arbol4(
        3,
        Arbol4(9, None, None, None, None),
        None,
        None,
        None
    ),
    Arbol4(
        4,
        Arbol4(10, None, None, None, None),
        None,
        None,
        None
    ),
    Arbol4(
        5,
        Arbol4(11, None, None, None, None),
        Arbol4(12, None, None, None, None),
        None,
        None
    )
)

__import__('pprint').pprint(objArbol4)
__import__('pprint').pprint(objArbol4.key)
__import__('pprint').pprint(objArbol4.left.key)
__import__('pprint').pprint(objArbol4.right1.key)
__import__('pprint').pprint(objArbol4.right2.key)
__import__('pprint').pprint(objArbol4.right3.key)
