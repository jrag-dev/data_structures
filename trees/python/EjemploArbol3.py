from Arbol3 import Arbol3


objArbol3 = Arbol3(
    "a",
    Arbol3(
        "b",
        Arbol3("e", None, None, None),
        Arbol3("f", None, None, None),
        Arbol3("g", None, None, None)
    ),
    Arbol3(
        "c",
        Arbol3("h", None, None, None),
        None,
        None
    ),
    Arbol3("d", None, None, None)
)

__import__('pprint').pprint(objArbol3)
