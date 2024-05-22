from Tree3 import Tree3


objTree3 = Tree3(
    "a",
    Tree3(
        "b",
        Tree3("e", None, None, None),
        Tree3("f", None, None, None),
        Tree3("g", None, None, None)
    ),
    Tree3(
        "c",
        Tree3("h", None, None, None),
        None,
        None
    ),
    Tree3("d", None, None, None)
)

objTree3b = Tree3(
    "a",
    Tree3(
        "b",
        Tree3(
            "d",
            Tree3("j", None, None, None),
            Tree3("k", None, None, None),
            None
        ),
        Tree3("e", None, None, None),
        None
    ),
    Tree3(
        "c",
        Tree3("f", None, None, None),
        Tree3("g", None, None, None),
        None
    ),
    Tree3(
        "b", 
        Tree3("h", None, None, None),
        Tree3(
            "i",
            Tree3("m", None, None, None),
            None,
            None
        ),
        None
    )
)

print(objTree3.preorder())
print(objTree3.inorder())
print(objTree3.posorder())

print("\nOtro Arbol")

print(objTree3b.preorder())
print(objTree3b.inorder())
print(objTree3b.posorder())
